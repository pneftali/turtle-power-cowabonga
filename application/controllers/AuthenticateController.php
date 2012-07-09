<?php

class AuthenticateController extends Zend_Controller_Action
{
    protected $_instance;
    protected $_return;

    public function init()
    {   
        date_default_timezone_set('Asia/Seoul');

        $this->_instance = Zend_Auth::getInstance();
        if(!$this->_instance->hasIdentity())
            $this->_helper->redirector('index','login'); 

        $this->_return = array('status' => '', 'msg' => '');    
    }

    public function indexAction()
    {
        $this->_helper->redirector('index');
        $this->disableLayout(); 

        if( $this->isUser( $this->getRequest()->getPost() ) ){ 
            $this->_helper->redirector('index', 'home');
            //$this->_return['status']    = true;            
        } else{
            $this->_helper->redirector('index', 'home');
            $this->_return['status']    = false;
            $this->_return['msg']       = 'Wrong Username/Email and Password combination';        
        }

        //echo json_encode($this->_return);
    }

    public function logoutAction()
    {
        $identityObject = $this->_instance->getIdentity();
        $this->logLoginTime((array)$identityObject);
        $this->disableLayout();

        $_SESSION = array();
        Zend_Auth::getInstance()->clearIdentity();
        Zend_Session::destroy();
        session_destroy();
        $this->_helper->redirector('index', 'index'); // back to login page
    }




/*  --------------------------------------------------
    Helper Functions
    -------------------------------------------------- */

    
    private function disableLayout()
    {
        $front = Zend_Controller_Front::getInstance();
        $front->setParam('noViewRenderer',true);
        //$this->_helper->layout()->disableLayout();
    }

    protected function isUser($post)
    {
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

    private function logLoginTime($data)
    {
        $employeeModel   = new Application_Model_DbTable_Employee();
        $employeeModel->logUserAction($data, 'logout');
    }






    

    

    
}
