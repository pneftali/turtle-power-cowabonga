<?php

class Application_Model_DbTable_Businessunit extends Zend_Db_Table_Abstract
{

    protected $_name = 'business_unit';

/*---------------------------
    
----------------------------*/
    
    function fetchAllBusinessUnit()
    {
        $statement = "
            SELECT *             
            FROM business_unit
            ORDER BY name ASC
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }    

}

