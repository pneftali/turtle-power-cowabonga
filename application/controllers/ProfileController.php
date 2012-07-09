<?php

class ProfileController extends Zend_Controller_Action
{
    protected $_instance;

    public function init()
    {
        date_default_timezone_set('Asia/Seoul');

        $this->_instance = Zend_Auth::getInstance();
        if(!$this->_instance->hasIdentity()){
            $get    = $this->getRequest()->getParams();
            $ns     = new Zend_Session_Namespace('user_profile');
            $ns->userProfileEmail = $get['email'];
            $this->_helper->redirector('index','login');    
        }
    }

    public function indexAction()
    {        
    	$get               = $this->getRequest()->getParams();
        $identityObject    = $this->_instance->getIdentity();
    	$employeeModel     = new Application_Model_DbTable_Employee();    
        $messageModel      = new Application_Model_DbTable_Message();
        $rankingsModel     = new Application_Model_DbTable_Rankings();	

        $this->logLoginTime((array)$identityObject);
        
        $userProfile    = $employeeModel->getProfileBy($get['email']);
        $totalMsgCount  = $messageModel->getTotalMessage($userProfile['employee_code'], 'profile');

        $this->view->totalMsgCount          = $totalMsgCount['count']; 
    	$this->view->profile                = $userProfile;
        $this->view->allTimeCardCount       = $rankingsModel->getAllCardsCount($userProfile['employee_code']);
    }


    public function fetchMessagesAction()
    {
        $this->disableLayout();   
        
        $get = $this->getRequest()->getParams();

        if($get){
            $messageModel   = new Application_Model_DbTable_Message();
            $ret            = $messageModel->fetchMessages($get['employee_code'], $get['start'], 'profile');
        } 

        echo json_encode($this->sanitizeJSON($ret));
    }

    public function fetchSingleMessageAction()
    {
        $this->disableLayout();   
        
        $get = $this->getRequest()->getParams();

        if($get){
            $messageModel   = new Application_Model_DbTable_Message();
            $ret            = $messageModel->fetchSingleMessage($get);
        } 

        echo json_encode($ret);
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
    
    private function logLoginTime($data)
    {
        $employeeModel   = new Application_Model_DbTable_Employee();
        $employeeModel->logUserAction($data, 'logout');
    }
}
