<?php

class IndexController extends Zend_Controller_Action
{
    protected $_instance;
    private $country = array(
            "X5" => "- select -",
            "96" => "Korea (South)",
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
            "95" => "Korea (North)",            
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

        $bcryptModel    = new Application_Model_Bcrypt(15);
        $salt           = $bcryptModel->getSalt();

        $winnersModel   = new Application_Model_DbTable_Winners();
        $rankingsModel  = new Application_Model_DbTable_Rankings(); 
        $countModel     = new Application_Model_DbTable_Count(); 
        $countryModel   = new Application_Model_DbTable_Country();    
        $employeeModel  = new Application_Model_DbTable_Employee();
        $messageModel       = new Application_Model_DbTable_Message();
        $bussinessModel     = new Application_Model_DbTable_Businessunit();
        $departmentModel    = new Application_Model_DbTable_Department();

        $this->logLoginTime((array)$identityObject);

        // checking if user still has enough cards for the month
        $countModel         = new Application_Model_DbTable_Count();
        $msgCount           = $countModel->getCurrentMessageCount($identityObject->employee_code);
        $_SESSION['count']  = ($msgCount['count']) ? $msgCount['count'] : 0;

        // checking if user has recently reset the password
        $ns = new Zend_Session_Namespace('resetPassword');
        if($ns->checkResetPassStatus){
            $this->view->resetPassStatus = $employeeModel->checkResetPasswordStatus($identityObject);
            $ns->checkResetPassStatus    = 0;
        } else{
            $this->view->resetPassStatus = 0;
        }
   
        $current_winner                 = $winnersModel->fetchCurrentWinner();
        $this->view->department         = $departmentModel->fetchAllDepartment();
        $this->view->business_unit      = $bussinessModel->fetchAllBusinessUnit();
        $this->view->new_card_count     = $messageModel->fetchNewlyReceivedCards($identityObject);
        $this->view->userMessageCount   = $countModel->getCurrentMessageCount($identityObject->employee_code);
        $this->view->userRankCount      = $rankingsModel->getRankCurrentRankCount($identityObject->employee_code);
        $this->view->allTimeCardsCount      = $rankingsModel->getAllCardsCount($identityObject->employee_code);
        $this->view->winnerTotalCardCount   = $rankingsModel->getAllCardsCount($current_winner['employee_code']);
        $this->view->winnerDetails          = $current_winner;
        $this->view->userDetails            = $identityObject;
        $this->view->flagPath               = $countryModel->getFlag($identityObject->country);
        $this->view->userProfileLink        = explode("@", $identityObject->email);   

        if($identityObject->dob !== "0000-00-00"){
            $this->view->dob = $this->formatDate(strtotime($identityObject->dob)); 
        }

        $month = array(
            ''      => '- month -',
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
        $this->view->month      = $month;
        $this->view->country    = $this->country;

        $this->view->curr_microtome = date('c');
    }

    public function updateProfileAction()
    {
        $this->disableLayout();
        $identityObject = $this->_instance->getIdentity();
        $get            = $this->getRequest()->getParams();
        $employeeModel  = new Application_Model_DbTable_Employee();
        $employeeModel->updateProfile($get, $identityObject->employee_code);

        $ns             = new Zend_Session_Namespace( 'image_path' );
        if( isset($ns->profile_img_path) && isset($ns->profile_avatar_path) )
        {
            $employeeModel->updateImagePath($identityObject->employee_code, $ns->profile_img_path, $ns->profile_avatar_path);
            $identityObject->profile_img_path   = $ns->profile_img_path;
            $identityObject->avatar_path        = $ns->profile_avatar_path;
            Zend_Session::namespaceUnset( 'image_path' );
        }

        // update session if user choses avatar 
        if(isset($get['avatar'])){
            $identityObject->profile_img_path   = '/images/profile/'.$get['avatar'];
            $identityObject->avatar_path        = '/images/small/'.$get['avatar'];
        }

        // don't forget to update the sessions
        $identityObject->full_name              = $get['edit_name'];
        $identityObject->country                = $get['country'];
        $identityObject->business_unit_code     = $get['business_unit'];
        $identityObject->department_code        = $get['department'];

        if($get['edit_birthday_month'] === '' OR $get['edit_birthday_day'] === ''){
            $identityObject->dob = '0000-00-00';    
        } else {
            $identityObject->dob = '2012-'.$get['edit_birthday_month'].'-'.$get['edit_birthday_day'];
        }
        
        echo json_encode($get);
    }

    public function updateInitialProfilePicAction()
    {
        $this->disableLayout();
        $identityObject = $this->_instance->getIdentity();
        $get            = $this->getRequest()->getParams();
        $employeeModel  = new Application_Model_DbTable_Employee();

        $ns             = new Zend_Session_Namespace( 'image_path' );
        if( isset($ns->profile_img_path) && isset($ns->profile_avatar_path) )
        {
            $employeeModel->updateImagePath($identityObject->employee_code, $ns->profile_img_path, $ns->profile_avatar_path);
            $identityObject->profile_img_path   = $ns->profile_img_path;
            $identityObject->avatar_path        = $ns->profile_avatar_path;
            Zend_Session::namespaceUnset( 'image_path' );
        }
    }

    public function updateProfilePicAction()
    {
        $this->disableLayout();
        $identityObject = $this->_instance->getIdentity();
        $get            = $this->getRequest()->getParams();
        $employeeModel  = new Application_Model_DbTable_Employee();
        $employeeModel->updateInitialProfilePicWithAvatar($get, $identityObject->employee_code);

        $identityObject->profile_img_path   = '/images/profile/'.$get['avatar'];
        $identityObject->avatar_path        = '/images/small/'.$get['avatar'];

        echo json_encode($get);
    }

    public function updateThxboxAction()
    {
        $this->disableLayout();
        $identityObject = $this->_instance->getIdentity();        
        $rankingsModel  = new Application_Model_DbTable_Rankings();
        $countryModel   = new Application_Model_DbTable_Country();

        $this->view->userDetails        = $identityObject;
        $this->view->userRankCount      = $rankingsModel->getRankCurrentRankCount($identityObject->employee_code); 
        $this->view->allTimeCardsCount  = $rankingsModel->getAllCardsCount($identityObject->employee_code);
        $this->view->userProfileLink    = explode("@", $identityObject->email);
        $this->view->flagPath           = $countryModel->getFlag($identityObject->country);
        
        if($identityObject->dob !== "0000-00-00"){
            $this->view->dob = $this->formatDate(strtotime($identityObject->dob)); 
        }

        //$data = '1';
        //$this->_helper->json($this->render());
        //echo $this->view->render('update-thxbox.phtml');
        //echo $this->render();

        echo $this->render();
/*
        $json = Zend_Json::encode(array(
            'html' => $this->render()
        ));
        echo $json;
/*
        $ret = array('d' => $this->render());
        echo json_encode($ret);
        */
    }

    public function sendFeedbackAction()
    {
        $this->disableLayout();
        $post           = $this->getRequest()->getPost();
        $identityObject = $this->_instance->getIdentity();        

        $this->sendEmail('n.papelleras@arcanys.com', $identityObject->email, $identityObject->full_name, $post['msg']);
        echo json_encode($post);
    }

    public function checkCurrentPasswordAction()
    {
        $this->disableLayout();
        $identityObject = $this->_instance->getIdentity();
        $post           = $this->getRequest()->getPost();
        $employeeModel  = new Application_Model_DbTable_Employee();

        $ret    = $employeeModel->checkCurrentPassword($identityObject->email, $post['password']);

        echo json_encode($ret);
    }

    public function updatePasswordAction()
    {
        $this->disableLayout();
        $identityObject = $this->_instance->getIdentity();
        $post           = $this->getRequest()->getPost();
        $employeeModel  = new Application_Model_DbTable_Employee();
        $employeeModel->updatePassword($identityObject, $post['password']);

        $identityObject->password = $post['password'];

        echo json_encode($post);
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

    private function formatDate($date)
    {
        $day = date('j', $date);
        switch($day){
            case 1:
                return date('F', $date).' '.$day.'st';
            case 2:
                return date('F', $date).' '.$day.'nd';
            default:
                return date('F', $date).' '.$day.'th';
        }
    }

    private function sendEmail($email, $subject, $from, $body)
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
        $mail->setReplyTo($subject, $from);
        $mail->setFrom($subject, $from);
        $mail->addTo($email);
        $mail->setSubject('ThxBox Feedback from '.$subject);

        try {
            $sent = $mail->send($tr);
        } catch (Zend_Mail_Exception $e) {
            die($e);
        }        
    }

    private function microtime_float()
    {
        list($usec, $sec) = explode(" ", microtime());
        return ((int)$usec + (int)$sec)*1000;
    }

    private function logLoginTime($data)
    {
        $employeeModel   = new Application_Model_DbTable_Employee();
        $employeeModel->logUserAction($data, 'logout');
    }

}