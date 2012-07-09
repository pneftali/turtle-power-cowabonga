<?php

class RankingsController extends Zend_Controller_Action
{
    protected $_instance;

    public function init()
    {   
        date_default_timezone_set('Asia/Seoul');
        
        $this->_instance = Zend_Auth::getInstance();
        if(!$this->_instance->hasIdentity())
            $this->_helper->redirector('index','login');                      
    }


/*---------------------------
    Returns the top 5 wnf in JSON format.
    This is called by ajax - home.js
----------------------------*/  
    public function indexAction()
    {
    	$this->disableLayout();

        $get            = $this->getRequest()->getParams();
    	$rankingsModel  = new Application_Model_DbTable_Rankings();
    	$identityObject	= $this->_instance->getIdentity();

        echo json_encode($this->sanitizeJSON($rankingsModel->fetchTopRankings($identityObject, $get))); 
    }



/*---------------------------
    Called by the js script to poll the server every 15 seconds.

    This will check any updates on a specific user only. Not global.
----------------------------*/  
    function updatesAction()
    {   
        $this->disableLayout();

        $rankingsModel  = new Application_Model_DbTable_Rankings();
        $identityObject = $this->_instance->getIdentity();

        // 1) Checks if user received a broadcast    
        $data = $rankingsModel->checkStatus($identityObject);

        // 2) If user got a broadcast, reset it
        if($data['status']){
            $rankingsModel->resetStatus($identityObject);
        }

        echo json_encode($data);
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