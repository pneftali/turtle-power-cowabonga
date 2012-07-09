<?php
/*---------------------------
    Author: Neftali Papelleras
    Version: 1.0
    Date: June 1, 2012
----------------------------*/


class SignupController extends Zend_Controller_Action
{
    private $country    = array(
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
    }

    public function indexAction()
    {        
        $this->view->country    = $this->country;
        $this->view->month      = $this->month;
    }

    public function doSignUpAction()
    {
        $this->disableLayout();

        $post = $this->getRequest()->getPost();
        if($post){
            $signupModel    = new Application_Model_DbTable_Signup();
            
            $bcryptModel    = new Application_Model_Bcrypt(15);
            $salt           = $bcryptModel->getSalt();

            $return         = $signupModel->insertNewAccount($post, $salt);

            $confirm = hash('md5', $post['email_signup']);
            $baseURL = 'http://'.$_SERVER['HTTP_HOST'];
            
            $body   =   "   <table width='494px' height='285px' cellpadding='0' cellspacing='0' style='text-align:center; background: url(".$baseURL."/images/email/email-confirmation.jpg) no-repeat;'>";
            $body   .=  "       <tr>";
            $body   .=  "           <td style='padding-top:120px;'>";
            $body   .=  "               <a style='color: #404040' href='{$baseURL}/confirm/{$confirm}'>{$baseURL}/confirm/{$confirm}</a>";            
            $body   .=  "           </td>";
            $body   .=  "       <tr>";
            $body   .=  "   </table>";
            
            $this->sendEmail($post['email_signup'], $body);            
        }

        $ret = array('confirm' => $post['email_signup']);
        echo json_encode($ret);
    }

    public function resendConfirmationAction()
    {
        $this->disableLayout();

        $post = $this->getRequest()->getPost();
        if($post){
            $confirm = hash('md5', $post['confirmation']);
            $baseURL = 'http://'.$_SERVER['HTTP_HOST'];


            $body   =   "   <table width='494px' height='285px' cellpadding='0' cellspacing='0' style='text-align:center; background: url(".$baseURL."/images/email/email-confirmation.jpg) no-repeat;'>";
            $body   .=  "       <tr>";
            $body   .=  "           <td style='padding-top:120px;'>";
            $body   .=  "               <a style='color: #404040' href='{$baseURL}/confirm/{$confirm}'>{$baseURL}/confirm/{$confirm}</a>";            
            $body   .=  "           </td>";
            $body   .=  "       <tr>";
            $body   .=  "   </table>";


            /*
            $body = "
                Confirmation link: <a href='{$baseURL}/confirm/{$confirm}'>{$baseURL}/confirm/{$confirm}</a>
            ";
            */
            $this->sendEmail($post['confirmation'], $body);            
        }
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

        $ns = new Zend_Session_Namespace('auth_code');
        $ns->resultAuthCode = $result->getCode();
        return false;
    }

    private function _getAuthAdapter()
    {
        $dbAdapter      = Zend_Db_Table::getDefaultAdapter();
        $authAdapter    = new Zend_Auth_Adapter_DbTable($dbAdapter);
        
        $authAdapter->setTableName('employee')
            ->setIdentityColumn('email')
            ->setCredentialColumn('password');
            //->setCredentialTreatment('SHA1(CONCAT(?,salt))');            
        
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
        $mail->setFrom('no-reply@thxbox.com', 'ThxBox Notification');
        $mail->addTo($to);
        $mail->setSubject('ThxBox Account Confirmation');

        try {
            $sent = $mail->send($tr);
        } catch (Zend_Mail_Exception $e) {
            die($e);
        }        
    }
    
}
