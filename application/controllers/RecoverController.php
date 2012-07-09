<?php

class RecoverController extends Zend_Controller_Action
{

    public function init()
    {}

    public function indexAction()
    {

    	//echo substr(md5(rand(0, 100)), 0, 8);
    }

    public function sendMailAction()
    {
    	$this->disableLayout();
    	$post 		= $this->getRequest()->getPost();
    	$new_pass 	= substr(md5(rand(0, 100)), 0, 8);

    	$employeeModel  = new Application_Model_DbTable_Employee();
    	$ret 			= $employeeModel->resetPassword($post, $new_pass);
        $employeeModel->updateResetPassword($post['email'], 1);

    	$body   = "
            <div style='margin-bottom: 10px'>
                Hello,
            </div>
            <div style='margin-bottom: 10px'>
                Here is your new password: ".$new_pass."
            </div>
            <div style='margin-bottom: 10px'>
                If you lose it, we can always send you a new one :)
            </div>
            <div style='margin-bottom: 10px'>
                The ThxBox
            </div>
        ";

        $this->sendEmail($post['email'], $body);

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


    private function sendEmail($email, $body)
    {
        $config = array(
                'port'  => 587,
                'ssl'   => 'tls',
                'auth' => 'login',
                'username' => 'n.papelleras@arcanys.com',
                'password' => '1qaz45');


        $tr = new Zend_Mail_Transport_Smtp('mail.arcanys.com', $config);
        Zend_Mail::setDefaultTransport($tr);

        $mail = new Zend_Mail();
        $mail->setBodyHtml($body);
        $mail->setFrom('no-reply@thxbox.com', 'ThxBox Notification');
        $mail->addTo($email);
        $mail->setSubject('ThxBox Password Reset');

        try {
            $sent = $mail->send($tr);
        } catch (Zend_Mail_Exception $e) {
            die($e);
        }        
    }
    
}
