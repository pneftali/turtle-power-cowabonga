<?php

class Bootstrap extends Zend_Application_Bootstrap_Bootstrap
{
	protected function _initDoctype()
	{
		$this->bootstrap('view');
		$view = $this->getResource('view');
		$view->doctype('HTML5');
	}

	public function _initRouter()
	{
		$frontController 	= Zend_Controller_Front::getInstance();
		$router  			= $frontController->getRouter();

		$router->addRoute(
			'users',
			new Zend_Controller_Router_Route('user/:email', 
				array(
					'controller'	=> 'profile',
					'action'		=> 'index'
					))
			);

		$router->addRoute(
			'winners',
			new Zend_Controller_Router_Route('winner/:month/:year', 
				array(
					'controller'	=> 'winner',
					'action'		=> 'index'
					))
			);

		$router->addRoute(
			'confirm',
			new Zend_Controller_Router_Route('confirm/:confirm', 
				array(
					'controller'	=> 'confirm',
					'action'		=> 'index'
					))
			);

		
		$router->addRoute(
			'invite',
			new Zend_Controller_Router_Route('invite/:cid/:pid', 
				array(
					'controller'	=> 'private',
					'action'		=> 'set-password'
					))
			);

		
		$router->addRoute(
			'viewmessage',
			new Zend_Controller_Router_Route('message/:cid/:pid', 
				array(
					'controller'	=> 'private',
					'action'		=> 'view-message'
					))
			);

	}

}

