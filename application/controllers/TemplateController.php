<?php

class TemplateController extends Zend_Controller_Action
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

    public function fetchRandomMessageAction()
    {
    	$this->disableLayout();
        $templateModel     = new Application_Model_DbTable_Template();
    	$identityObject    = $this->_instance->getIdentity();    	

    	echo json_encode($templateModel->fetchAllTemplateMessage());
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


    
}
