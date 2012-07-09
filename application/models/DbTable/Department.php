<?php

class Application_Model_DbTable_Department extends Zend_Db_Table_Abstract
{

    protected $_name = 'department';

/*---------------------------
    
----------------------------*/
    
    function fetchAllDepartment()
    {
        $statement = "
            SELECT *             
            FROM department
            ORDER BY name ASC
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }    

}

