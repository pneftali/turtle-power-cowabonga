    <?php

class ConfirmController extends Zend_Controller_Action
{

    public function init()
    {
        date_default_timezone_set('Asia/Seoul');
    }

    public function indexAction()
    {
    	$this->disableLayout();
        $get = $this->getRequest()->getParams();

        $signupModel    = new Application_Model_DbTable_Signup();
        $employeeModel  = new Application_Model_DbTable_Employee();
        $ret            = $signupModel->confirmUser($get);

        $isRegistered   = $employeeModel->checkIfUserExistsBy($ret['email']);
        if($isRegistered['count'] > 0){
            $this->_helper->redirector('index','login');
        }
            
        if($ret){
            $signupModel->updateUser($get);
            $employeeModel->createEmployeeFromRegistration($ret);

            $rankingsModel  = new Application_Model_DbTable_Rankings();
            $rankingsModel->insertRankingsFromRegistration($ret);

            $data           = array('employee_code' => hash('md5', $ret['email']));
            $countModel     = new Application_Model_DbTable_Count();            
            $countModel->insertNewCount($data);

            $user_data = array(
                'email' => $ret['email'],
                'pass'  => $ret['password']
                );

            if( $this->isUser($user_data)){
                $ns = new Zend_Session_Namespace('show_edit_profile');
                $ns->hasConfirmed = 1;

                $this->logLoginTime($ret);
                $this->_helper->redirector('index','index');    
            }
        } else{
            $this->_helper->redirector('index','login');
        }
    }




/*  --------------------------------------------------
    Helper Functions
    -------------------------------------------------- */

    
    private function disableLayout()
    {
        $front = Zend_Controller_Front::getInstance();
        $front->setParam('noViewRenderer',true);
        $this->_helper->layout()->disableLayout();
    }

    protected function isUser($post)
    {
        if($this->isEmpty($post)) return false;

        $adapter = $this->_getAuthAdapter();
        $adapter->setIdentity($post['email']); 
        $adapter->setCredential($post['pass']);

        $auth = Zend_Auth::getInstance();
        $result = $auth->authenticate($adapter);

        if ($result->isValid()) {
            $user = $adapter->getResultRowObject();
            $auth->getStorage()->write($user);
            return true;
        }

        $ns = new Zend_Session_Namespace('auth_code');
        $ns->resultAuthCode = $result->getCode();
        return false;
    }

    private function _getAuthAdapter()
    {
        $dbAdapter      = Zend_Db_Table::getDefaultAdapter();
        $authAdapter    = new Zend_Auth_Adapter_DbTable($dbAdapter);
        
        $authAdapter->setTableName('employee')
            ->setIdentityColumn('email')
            ->setCredentialColumn('password');
            //->setCredentialTreatment('SHA1(CONCAT(?,salt))');            
        
        return $authAdapter;
    }    

    private function isEmpty($post)
    {
        if( empty($post['email']) || empty($post['pass'])) 
            return true;
        return false;
    }

    private function logLoginTime($data)
    {
        $employeeModel   = new Application_Model_DbTable_Employee();
        $employeeModel->logUserAction($data, 'login');
    }
}
