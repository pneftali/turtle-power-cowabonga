<?php

class Application_Model_DbTable_Country extends Zend_Db_Table_Abstract
{

    protected $_name = 'country_flags';

/*---------------------------
    
----------------------------*/
    
    function getFlag($id)
    {
        if($id == 'X5'){
            $id = 96; // default to korea south flag
        } 
        
        $statement = "
            SELECT *             
            FROM `country_flags`
            WHERE 
                id = $id
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }    

}

