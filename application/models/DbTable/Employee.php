<?php

class Application_Model_DbTable_Employee extends Zend_Db_Table_Abstract
{

    protected $_name = 'employee';

/*---------------------------
    Used by SignupController - index or from LoginController - index
----------------------------*/
    function createEmployeeFromRegistration($post)
    {
        // logic for country default
        if($post['country'] == 'X5'){
            $country = 96; // default to korea south flag
        } else {
            $country = $post['country'];
        }

        $data = array(
            'id'                    => '',
            'email'                 => $post['email'],
            'country_code'          => '0',
            'region_code'           => '0',
            'business_unit_code'    => '0',
            'department_code'       => '0',
            'employee_code'         => hash('md5', $post['email']),
            'first_name'            => '', 
            'last_name'             => '', 
            'full_name'             => ucwords($post['full_name']),
            'password'              => $post['password'],
            'salt'                  => $post['salt'], 
            'dob'                   => $post['dob'],
            'date_join'             => $post['date_signup'],
            'profile_img_path'      => '/images/profile/default.png',
            'avatar_path'           => '/images/small/default.png',
            'country'               => $country
        );

        return $this->insert($data);
    }

/*---------------------------
    Used by SignupController - index or from LoginController - index
----------------------------*/
    function createEmployeeFromInvitation($post, $salt)
    {
        // logic for country default
        if($post['country'] == 'X5'){
            $country = 96; // default to korea south flag
        } else {
            $country = $post['country'];
        }

        $data = array(
            'id'                    => '',
            'email'                 => $post['email_signup'],
            'country_code'          => '0',
            'region_code'           => '0',
            'business_unit_code'    => '0',
            'department_code'       => '0',
            'employee_code'         => hash('md5', $post['email_signup']),
            'first_name'            => '', 
            'last_name'             => '', 
            'full_name'             => ucwords($post['fullname']),
            'password'              => sha1($post['pass_signup'].$salt),
            'salt'                  => $salt, 
            'dob'                   => "2012-".$post['dob_month']."-".$post['dob_day'],
            'date_join'             => date('Y-m-d'),
            'profile_img_path'      => '/images/profile/default.png',
            'avatar_path'           => '/images/small/default.png',
            'country'               => $country
        );

        return $this->insert($data);
    }    


/*---------------------------
    Used by SearchController indexAction.
----------------------------*/
    function search($q, $where)
    {
    	/*  -------------------------

        the returned array should follow this format:
        'label' => 'the one shown in the drop down list'
        'value' => 'the one that will be shown in the search box'

        id is optional, but we will be using it so we included it in the search
        
        -------------------------   */

        $statement = "
        	SELECT 
                id, 
                employee_code, 
                email AS value, 
                full_name AS label                
            FROM employee 
        	WHERE 
                (email LIKE '%$q%' OR full_name LIKE '%$q%')
        ";

    	$query = $this->_db->query($statement);
    	return $query->fetchAll();
    }


/*---------------------------
    For fetching birthday list
----------------------------*/
    function fetchBirthdayList($data, $option)
    {
        $first_day  = date('Y-m-d', strtotime('first day of this month'));
        $last_day   = date('Y-m-d', strtotime('last day of this month'));
        $today      = date('Y-m-d');
        $where      = array($today);
        $sql = "
            SELECT * FROM employee
            WHERE 
                dob >= ?
            ORDER BY dob ASC
        ";

        ($option == 'default') ? $sql .= ' LIMIT 0, 7' : '';

        return $this->_db->fetchAll($sql, $where);
    }


/*---------------------------
    Used in MessageController postAction.

    This is to check whether an email address inputted by 
    the user in the search box exists in the database.
----------------------------*/
    function checkIfUserExistsBy($email)
    {
        $statement = "
            SELECT COUNT(*) AS count
            FROM employee
            WHERE email='$email'
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }


/*---------------------------
    Used in PrivateController indexAction. - depreciated
----------------------------*/
    function createEmployeeFromPrivate($data, $post)
    {
        $data = array(
            'id'                    => '',
            'email'                 => $data['email'],
            'country_code'          => '0',
            'region_code'           => '0',
            'business_unit_code'    => '0',
            'department_code'       => '0',
            'employee_code'         => hash('md5', $data['email']),
            'full_name'             => ucwords($post['fullname']), 
            'password'              => $post['password'], 
            'date_join'             => date('Y-m-d'),
            'profile_img_path'      => '/images/profile/default.png',
            'avatar_path'           => '/images/small/default.png',
            'country'               => 96           
        );

        return $this->insert($data);
    }


/*---------------------------
    Used in ProfileController indexAction.
----------------------------*/    
    function getProfileBy($data)
    {
        $month  = date('n');
        $year   = date('Y');

        $statement = "
            SELECT 
                e.*, 
                r.count 
            FROM employee AS e
            JOIN rankings AS r 
            ON e.employee_code=r.employee_code
            WHERE
                SUBSTRING_INDEX(e.email, '@', 1) = '$data' AND
                r.month     = '$month' AND
                r.year      = '$year'
        ";
        
        $query = $this->_db->query($statement);
        return $query->fetch();
    }


/*---------------------------
    
----------------------------*/  
    function updateImagePath($code, $path_big, $path_small)
    {
        $statement = "
            UPDATE employee
            SET 
                profile_img_path    = '$path_big',
                avatar_path         = '$path_small'
            WHERE 
                employee_code = '$code' 
        ";
        $query  = $this->_db->query($statement);       
    }


/*---------------------------
    
----------------------------*/  
    function updateProfile($data, $code)
    {
        if(isset($data['avatar'])){
            $statement = "
                UPDATE employee
                SET 
                    business_unit_code  = ".$data['business_unit'].",
                    department_code     = ".$data['department'].",
                    full_name           = ".$this->_db->quote($data['edit_name']).",
                    dob                 = '2012-$data[edit_birthday_month]-$data[edit_birthday_day]',
                    country             = '$data[country]',
                    profile_img_path    = '/images/profile/$data[avatar]',
                    avatar_path         = '/images/small/$data[avatar]'
                WHERE 
                    employee_code = '$code' 
            ";
        } else{
            $statement = "
                UPDATE employee
                SET 
                    business_unit_code  = ".$data['business_unit'].",
                    department_code     = ".$data['department'].",
                    full_name           = ". $this->_db->quote($data['edit_name']) .",
                    dob                 = '2012-$data[edit_birthday_month]-$data[edit_birthday_day]',
                    country             = '$data[country]'
                WHERE 
                    employee_code = '$code' 
            ";
        }
        $query  = $this->_db->query($statement);       
    }

    function updateInitialProfilePicWithAvatar($data, $code)
    {
        $statement = "
            UPDATE employee
            SET 
                profile_img_path    = '/images/profile/$data[avatar]',
                avatar_path         = '/images/small/$data[avatar]'
            WHERE 
                employee_code = '$code' 
        ";

        $query  = $this->_db->query($statement);
    }


/*---------------------------
    Check if email already exists
----------------------------*/    
    function checkEmail($data)
    {
        $statement = "
            SELECT COUNT(id) AS count                
            FROM employee
            WHERE
                email = '$data[email]'
        ";
        
        $query = $this->_db->query($statement);
        return $query->fetch();
    } 


/*---------------------------
    Check if email already exists
----------------------------*/    
    function checkIfUserHasAlreadyConfirmed($code)
    {
        $statement = "
            SELECT COUNT(id) AS count                
            FROM employee
            WHERE
                employee_code = '$code'
        ";
        
        $query = $this->_db->query($statement);
        return $query->fetch();
    } 


/*---------------------------
    Reset password
----------------------------*/    
    function resetPassword($data, $pass)
    {
        $salt = $this->getSalt($data['email']);
        $pass = sha1($pass.$salt['salt']);

        $statement = "
            UPDATE employee
            SET 
                password   = '$pass'
            WHERE 
                email = '$data[email]' 
        ";
        
        return $this->_db->query($statement);
    }  


/*---------------------------
    Log
----------------------------*/       
    function logUserAction($data, $type)
    {
        $statement = "
            UPDATE employee
            SET 
                `".$type."` = '".date('Y-m-d H:i:s')."'
            WHERE 
                email = '$data[email]' 
        ";

        return $this->_db->query($statement);
    }    


/*---------------------------
    Check current Password
----------------------------*/
    function checkCurrentPassword($email, $password)
    {
        $salt = $this->getSalt($email);
        $pass = sha1($password.$salt['salt']);

        $where = array($email, $pass);
        $sql = "
            SELECT id
            FROM employee
            WHERE
                email       = ? AND
                password    = ?
        ";
        return $this->_db->fetchRow($sql, $where);
    }

/*---------------------------
    Update Password
----------------------------*/       
    function updatePassword($data, $password)
    {
        $salt = $this->getSalt($data->email);
        $pass = sha1($password.$salt['salt']);

        $statement = "
            UPDATE employee
            SET 
                password = '".$pass."',
                reset_pass_status = 0
            WHERE 
                employee_code = '$data->employee_code' 
        ";

        return $this->_db->query($statement);
    }

/*---------------------------
    Update Reset Pass Status
----------------------------*/
    function updateResetPassword($email, $value)
    {
        $statement = "
            UPDATE employee
            SET 
                reset_pass_status = ".$value."
            WHERE 
                email = '$email' 
        ";

        return $this->_db->query($statement);
    }

/*---------------------------
    Check Password reset status
----------------------------*/
    function checkResetPasswordStatus($data)
    {
        $where = array($data->employee_code);
        $sql = "
            SELECT reset_pass_status
            FROM employee
            WHERE
                employee_code   = ?
        ";
        
        return $this->_db->fetchRow($sql, $where);
    }


/*---------------------------
    Get Salt
----------------------------*/
    private function getSalt($email)
    {
        $where = array($email);
        $sql = "
            SELECT salt
            FROM employee
            WHERE
                email   = ?
        ";
        
        return $this->_db->fetchRow($sql, $where);
    }

/*---------------------------
    Get Email using username
----------------------------*/
    function getEmailByUsername($username)
    {
        $sql = "
            SELECT email
            FROM employee
            WHERE
                email LIKE '%$username%'
        ";

        $query = $this->_db->query($sql);
        return $query->fetch();        
    }

/*---------------------------
    
----------------------------*/
    function getAllEmployeeCode()
    {
        $sql = "
            SELECT employee_code
            FROM employee
        ";
        
        return $this->_db->fetchAll($sql);
    }    
    
}

