<?php

class ImagickController extends Zend_Controller_Action
{
	protected $_instance;	

    public function init()
    {
    	$this->_instance = Zend_Auth::getInstance();
        if(!$this->_instance->hasIdentity())
            $this->_helper->redirector('index','login');
    }

    public function indexAction()
    {

    }

    public function resizeImageAction()
    {
        $this->disableLayout();

    	// set oldpath
    	$filename	= 'facebook-profile-picture-no-pic-avatar.jpg';
    	$oldPath 	= "http://wnf.arcanys.com/uploads/tmp/".$filename;

    	$img = new Application_Model_Imageresizer($oldPath);
    	$img->resize('200', '200');
        
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
