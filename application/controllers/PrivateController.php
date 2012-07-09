<?php

class PrivateController extends Zend_Controller_Action
{
    protected $_instance;
    private $country    = array(
            "X5" => "- select -",
            "96" => "South Korea",
            "X4" => "----------------", 
            "1" => "Afghanistan",
            "2" => "Albania",
            "3" => "Algeria",
            "4" => "Andorra",
            "5" => "Angola",
            "6" => "Antigua & Barbuda",
            "7" => "Argentina",
            "8" => "Armenia",
            "9" => "Australia",
            "10" => "Austria",
            "11" => "Azerbaijan",
            "12" => "Bahamas",
            "13" => "Bahrain",
            "14" => "Bangladesh",
            "15" => "Barbados",
            "16" => "Belarus",
            "17" => "Belgium",
            "18" => "Belize",
            "19" => "Benin",
            "20" => "Bhutan",
            "21" => "Bolivia",
            "22" => "Bosnia and Hercegovina",
            "23" => "Botswana",
            "24" => "Brazil",
            "25" => "Brunei",
            "26" => "Bulgaria",
            "27" => "Burkina Faso",
            "28" => "Burma",
            "29" => "Burundi",
            "30" => "Côte d'Ivoire",
            "31" => "Cambodia",
            "32" => "Cameroon",
            "33" => "Canada",
            "34" => "Cape Verde",
            "35" => "Central African Republic",
            "36" => "Chad",
            "37" => "Chile",
            "38" => "China",
            "39" => "Colombia",
            "40" => "Comoros",
            "41" => "Congo",
            "42" => "Costa Rica",
            "43" => "Croatia",
            "44" => "Cuba",
            "45" => "Cyprus",
            "46" => "Czech Republic",
            "47" => "Denmark",
            "48" => "Djibouti",
            "49" => "Dominica",
            "50" => "Dominican Republic",
            "51" => "East Timor",
            "52" => "Ecuador",
            "53" => "Egypt",
            "54" => "El Salvador",
            "55" => "England",
            "56" => "Equatorial Guinea",
            "57" => "Eritrea",
            "58" => "Estonia",
            "59" => "Ethiopia",
            "60" => "EU",
            "61" => "Faroese",
            "62" => "Fiji",
            "63" => "Finland",
            "64" => "France",
            "65" => "Gabon",
            "66" => "Gambia",
            "67" => "Georgia",
            "68" => "Germany",
            "69" => "Ghana",
            "70" => "Greece",
            "71" => "Grenada",
            "72" => "Guatemala",
            "73" => "Guinea",
            "74" => "Guinea-Bissau",
            "75" => "Guyana",
            "76" => "Haiti",
            "77" => "Honduras",
            "78" => "Hong Kong",
            "79" => "Hungary",
            "80" => "Iceland",
            "81" => "India",
            "82" => "Indonesia",
            "83" => "Iran",
            "84" => "Iraq",
            "85" => "Ireland",
            "86" => "Isle of Man",
            "87" => "Israel",
            "88" => "Italy",
            "89" => "Jamaica",
            "90" => "Japan",
            "91" => "Jordan",
            "92" => "Kazakhstan",
            "93" => "Kenya",
            "94" => "Kiribati",
            "95" => "North Korea",            
            "97" => "Kuwait",
            "98" => "Kosovo",
            "99" => "Kyrgyzstan",
            "100" => "Laos",
            "101" => "Latvia",
            "102" => "Lebanon",
            "103" => "Lesotho",
            "104" => "Liberia",
            "105" => "Libya",
            "106" => "Liechtenstein",
            "107" => "Lithuania",
            "108" => "Luxembourg",
            "109" => "Macau",
            "110" => "Macedonia",
            "111" => "Madagascar",
            "112" => "Malawi",
            "113" => "Malaysia",
            "114" => "Maldives",
            "115" => "Mali",
            "116" => "Malta",
            "117" => "Marshall Islands",
            "118" => "Mauritania",
            "119" => "Mauritius",
            "120" => "Mexico",
            "121" => "Micronesia",
            "122" => "Moldavia",
            "123" => "Monaco",
            "124" => "Mongolia",
            "125" => "Montenegro",
            "126" => "Morocco",
            "127" => "Mozambique",
            "128" => "Namibia",
            "129" => "Nauru Island",
            "130" => "Nepal",
            "131" => "Netherlands",
            "132" => "New Zealand",
            "133" => "Nicaragua",
            "134" => "Niger",
            "135" => "Nigeria",
            "136" => "Norway",
            "137" => "Oman",
            "138" => "Pakistan",
            "139" => "Palau",
            "140" => "Panama",
            "141" => "Papua New Guinea",
            "142" => "Paraguay",
            "143" => "Peru",
            "144" => "Philippines",
            "145" => "Poland",
            "146" => "Portugal",
            "147" => "Puerto Rico",
            "148" => "Qatar",
            "149" => "Romania",
            "150" => "Russia",
            "151" => "Rwanda",
            "152" => "São Tomé and Príncipe",
            "153" => "Saint Kitts and Nevis",
            "154" => "Saint Lucia",
            "155" => "Saint Vincent",
            "156" => "Samoa",            
            "157" => "San Marino",
            "158" => "Saudi Arabia",
            "159" => "Scotland",
            "160" => "Senegal",
            "161" => "Serbia",
            "162" => "Seychelles",
            "163" => "Sierra Leone",
            "164" => "Singapore",
            "165" => "Slovakia",
            "166" => "Slovenia",
            "167" => "Solomon Islands",
            "168" => "Somalia",
            "169" => "South Africa",
            "170" => "Spain",
            "171" => "Sri Lanka",
            "172" => "Sudan",
            "173" => "Suriname",
            "174" => "Swaziland",
            "175" => "Sweden",
            "176" => "Switzerland",
            "177" => "Syria",
            "178" => "Taiwan",
            "179" => "Tajikistan",
            "180" => "Tanzania",
            "181" => "Thailand",
            "182" => "Togo",
            "183" => "Tonga",
            "184" => "Trinidad & Tobago",
            "185" => "Tunisia",
            "186" => "Turkey",
            "187" => "Turkmenistan",
            "188" => "Tuvalu",
            "189" => "Uganda",
            "190" => "Ukraine",
            "191" => "United Arab Emirates",
            "192" => "United Kingdom",
            "193" => "USA",
            "194" => "Uruguay",
            "195" => "USSR",
            "196" => "Uzbekistan",
            "197" => "Vanuatu",
            "198" => "Vatican City State",
            "199" => "Venezuela",
            "200" => "Vietnam",
            "201" => "Wales",
            "202" => "Yemen",
            "203" => "Zambia",
            "204" => "Zimbabwe"
            );
    private $month      = array(
            '01'   => 'Jan', 
            '02'   => 'Feb', 
            '03'   => 'Mar', 
            '04'   => 'Apr', 
            '05'   => 'May', 
            '06'   => 'Jun', 
            '07'   => 'Jul', 
            '08'   => 'Aug', 
            '09'   => 'Sep', 
            '10'   => 'Oct', 
            '11'   => 'Nov', 
            '12'   => 'Dec'
            );
 


    public function init()
    {
        date_default_timezone_set('Asia/Seoul');

        $this->_instance = Zend_Auth::getInstance();

        if($this->_instance->hasIdentity())
            $this->_helper->redirector('index','index');      
    }

    public function indexAction()
    {
        $this->disableLayout();

        $post = $this->getRequest()->getPost();


        if(!isset($_SESSION['private_status'])){
            //$this->_helper->redirector('index', 'login');
        }

        $_SESSION['private_status'] += 1; // means the user has already got here        

        // check first if user has already confirmed
        if($_SESSION['private_status'] > 1){
            //$this->_helper->redirector('index', 'login');
        }

        echo 's: '.$_SESSION['private_status'];

        // Check first for the status if the user has visited this site already
        $privateModel       = new Application_Model_DbTable_Private();
        $state              = $privateModel->checkPrivateMessageState($post['pid']);
        
        if(!$state['state']){   

            // 1) Fetch the data of this user from private table        
            $privateUserData    = $privateModel->fetchUserData($post['confirmation_link']);
            $privateForRankings = $privateModel->fetchUserDataForRankings($post['confirmation_link']);

           
            // 2) Create a record for this user in the employee table    
            $employeeModel  = new Application_Model_DbTable_Employee();        
            $bcryptModel    = new Application_Model_Bcrypt(15);
            $salt           = $bcryptModel->getSalt();

            //$id             = $employeeModel->createEmployeeFromPrivate($privateUserData, $post);
            $id             = $employeeModel->createEmployeeFromInvitation($post, $salt);

            
            // 3) Fetch all messages for this user      
            $messages       = $privateModel->fetchMessages($post['confirmation_link']);


            // 4) Insert rankings table and update all employees
            $rankingsModel  = new Application_Model_DbTable_Rankings();
            $rankingsModel->insertRankingsFromPrivate($privateForRankings);
            $rankingsModel->updateRankingStatus();


            // 5) Insert messages to message table
            $messageModel   = new Application_Model_DbTable_Message();
            foreach($messages AS $key => $val)
            {
                $messageModel->insertMessagesFromPrivate($val);
            }
            
            // create a count in the count table
            $data           = array('employee_code' => $post['confirmation_link']);
            $countModel     = new Application_Model_DbTable_Count();            
            $countModel->insertNewCount($data);

            // 6) Update the status of the message so that it can no longer be seen twice
            $privateModel->updateMessageStatus($post['pid']);



            // 7) Automatically re-direct the user to homepage
            $postData = array(
                'email' => $privateUserData['email'],
                'pass'  => $post['pass_signup']
                );

            if($this->isUser($postData)){
                $link = explode("@", $privateUserData['email']); 
                //echo 'hi';
                $this->_helper->redirector($link[0], 'user');
            } else{
                //echo 'ho';
                $this->_helper->redirector('index', 'login');
            } 
            
        } else {
            $this->_helper->redirector('index', 'login');
        }
 
    }



    public function setPasswordAction()
    {
        $_SESSION['private_status'] = 0; // means the user has already got here

        // Checking for state needs to be checked here
        $get = $this->getRequest()->getParams();

        $privateModel       = new Application_Model_DbTable_Private();
        $employeeModel      = new Application_Model_DbTable_Employee();

        // 1) check first if user has already confirmed
        $isUser             = $employeeModel->checkIfUserHasAlreadyConfirmed($get['cid']);
        if($isUser['count']){
            $this->_helper->redirector('index', 'login');
        }
        
        $state              = $privateModel->checkPrivateMessageState($get);
        $this->view->email  = $state['email'];
        
        // NOTE ::
        // $state is 'false' if either pid or cid does not exist
        if($state && !$state['state']){    	

        	$this->view->confirmation_link  = $get['cid'];
            $this->view->pid                = $get['pid'];

        } else {
            $this->_helper->redirector('index', 'login');
        }     

        $this->view->country    = $this->country;
        $this->view->month      = $this->month;   
    }


    public function viewMessageAction()
    {
        $get = $this->getRequest()->getParams();
        $baseURL            = 'http://'.$_SERVER['HTTP_HOST'];

        $privateModel       = new Application_Model_DbTable_Private();
        $where              = array('msg_id' => $get['pid']);        
        $this->view->data   = $privateModel->fetchSingleMessage($where);
        $this->view->url    = $baseURL.'/invite/'.$get['cid'].'/'.$get['pid'];

        $where              = array('pid' => $get['pid'], 'cid' => $get['cid']);        
        $this->view->anonymous = $privateModel->checkPrivateMessageAnon($where);
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

    protected function isUser($post)
    {
        if($this->isEmpty($post)) return false;

        
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
            ->setCredentialColumn('password')
            ->setCredentialTreatment('SHA1(CONCAT(?,salt))');             
        
        return $authAdapter;
    }    

    private function isEmpty($post)
    {
        if( empty($post['email']) || empty($post['pass'])) 
            return true;
        return false;
    }

    private function sendEmail($to, $body)
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
        $mail->setFrom('n.papelleras@arcanys.com', 'ThxBox Robot');
        $mail->addTo($to);
        $mail->setSubject('ThxBox Notification');
        try {
            $sent = $mail->send($tr);
        } catch (Zend_Mail_Exception $e) {
            die($e);
        }        
    }
    
}
