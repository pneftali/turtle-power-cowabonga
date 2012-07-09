<?php

class BirthdayController extends Zend_Controller_Action
{
	protected $_instance;
	
    public function init()
    {
        date_default_timezone_set('Asia/Seoul');
        
    	$this->_instance = Zend_Auth::getInstance();
        if(!$this->_instance->hasIdentity())
            $this->_helper->redirector('index','login');  
    }

    public function indexAction()
    {
    	
    }

    public function showBirthdayListAction()
    {
    	$this->disableLayout();
        $employeeModel  = new Application_Model_DbTable_Employee();
    	$identityObject = $this->_instance->getIdentity();    	
        $get            = $this->getRequest()->getParams();

    	$json = $employeeModel->fetchBirthdayList($identityObject, $get['option']);

    	echo json_encode($this->sanitizeJSON($json));
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

    private function sanitizeJSON($data)
    {
        $return     = array();
        $container  = array();
        foreach($data AS $key=>$val){
            foreach($val AS $keys=>$vals){
                $container[$keys] = htmlspecialchars($vals);
            }
            $return[$key] = $container;
        }

        return $return;
    } 
    
}
