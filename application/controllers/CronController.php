<?php

class CronController extends Zend_Controller_Action
{

    public function init()
    {}

    public function indexAction()
    {
    	$this->disableLayout();

    	$this->_helper->redirector('index', 'login');
    }

    public function updateWinnerTableCronAction()
    {
        $this->disableLayout();

        date_default_timezone_set('Asia/Seoul');

        if( $this->isFirstDay( date('d', time()) )){

        	// 1) get the top voted employee from rankings table
	        $rankingsModel      = new Application_Model_DbTable_Rankings();
	        $topRankedEmployee  = $rankingsModel->getTopRankedEmployee();

	        // 2) insert it to winners table
	        $winnersModel       = new Application_Model_DbTable_Winners();
	        $winnersModel->insertNewWinner($topRankedEmployee); 

            // 3) update message count table, set msg to 3
            $employeeModel      = new Application_Model_DbTable_Employee();
            $employee_code      = $employeeModel->getAllEmployeeCode();
            $countModel         = new Application_Model_DbTable_Count();
            foreach($employee_code AS $key=>$val)
            {
                $rankingsModel->updateStatus($val['employee_code'], '');
                $countModel->insertNewCount($val);
            }
            
        } 
    }


    public function testMailAction()
    {
        $this->disableLayout();

        /*
        $config = array(
                'port'  => 587,
                'ssl'   => 'tls',
                'auth' => 'login',
                'username' => 'n.papelleras@arcanys.com',
                'password' => '1qaz45');

        $tr = new Zend_Mail_Transport_Smtp('mail.arcanys.com', $config);        
        Zend_Mail::setDefaultTransport($tr);

        $mail = new Zend_Mail();
        $mail->setBodyHtml('This is a test email with a subject line of Test INC0776547');
        $mail->setFrom('no-reply@thxbox.com', 'ThxBox Notification');
        $mail->addTo('walter.bergenson@ge.com');
        $mail->addTo('omc.tse@ge.com');
        $mail->addTo('n.papelleras@arcanys.com');

        $mail->setSubject('Test INC0776547');

        try {
            $sent = $mail->send($tr);
        } catch (Zend_Mail_Exception $e) {
            die($e);
        }   
        */     
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

    private function isFirstDay($day)
    {
    	return ($day === '01') ? true : false;
    }
    
}
