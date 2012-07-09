<?php

class Application_Model_DbTable_Signup extends Zend_Db_Table_Abstract
{

    protected $_name = 'signup';

/*---------------------------
    
----------------------------*/
    
    function insertNewAccount($post, $salt)
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
            'full_name'             => ucwords($post['fullname']),
            'password'              => sha1($post['pass_signup'].$salt), 
            'salt'                  => $salt,
            'dob'                   => "2012-".$post['dob_month']."-".$post['dob_day'],
            'date_signup'           => date('Y-m-d H:i:s'),
            'country'               => $country,
            'state'                 => 0,
            'confirmation_text'     => hash('md5', $post['email_signup'])
        );

        return $this->insert($data);
    }


/*---------------------------
    
----------------------------*/
    function confirmUser($data)
    {
        $where  = array($data['confirm'], 0);
        $sql = "
            SELECT *
            FROM signup
            WHERE 
                confirmation_text   = ? AND
                state               = ?
        ";
        return $this->_db->fetchRow($sql, $where);
    }


/*---------------------------
    
----------------------------*/
    function updateUser($data)
    {
        $statement = "
            UPDATE signup
            SET 
                `state` = 1
            WHERE 
                confirmation_text = '$data[confirm]' 
        ";

        return $this->_db->query($statement);
    }     

}

