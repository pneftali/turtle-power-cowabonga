<?php

class WinnerController extends Zend_Controller_Action
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
        $identityObject = $this->_instance->getIdentity();
        $get            = $this->getRequest()->getParams();

        $this->logLoginTime((array)$identityObject);

        // 1) get the details of the winner from winners table
        $winnersModel           = new Application_Model_DbTable_Winners();
        $messageModel           = new Application_Model_DbTable_Message();
        $rankingsModel          = new Application_Model_DbTable_Rankings();  


        $winnerProfile                  = $winnersModel->fetchWinnerPer($get);
        $this->view->profile            = $winnerProfile;
        $this->view->winner_date        = $get;        
        $totalMsgCount                  = $messageModel->getTotalMessageForWinner($winnerProfile['employee_code'], $get);
        $this->view->allTimeCardCount   = $rankingsModel->getAllCardsCount($winnerProfile['employee_code']);

        $this->view->totalMsgCount = $totalMsgCount['count'];   

        $month = array(
            '',
            'January', 
            'Febuary', 
            'March', 
            'April', 
            'May', 
            'June', 
            'July', 
            'August', 
            'September', 
            'October', 
            'November', 
            'December'
            );    
        $this->view->winner_month = $month[$get['month']];   
    }
    

    public function fetchMessagesAction()
    {
        $this->disableLayout();   
        
        $get = $this->getRequest()->getParams();

        if($get){
            $messageModel   = new Application_Model_DbTable_Message();
            $ret            = $messageModel->fetchMessagesForWinners($get);
        } 

        echo json_encode($this->sanitizeJSON($ret));
    }


    public function fetchAllWinnersPerAction()
    {
    	$this->disableLayout();

    	$get = $this->getRequest()->getParams();
        if($get){
        	$winnersModel 	= new Application_Model_DbTable_Winners();
        	$ret 			= $winnersModel->fetchAllWinnersPer($get);
        } 

        echo json_encode($this->sanitizeJSON($ret));
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