<?php

class Application_Model_DbTable_Template extends Zend_Db_Table_Abstract
{

    protected $_name = 'message_template';

/*---------------------------
    
----------------------------*/ 
    function fetchAllTemplateMessage()
    {
        $statement = "
            SELECT *
            FROM message_template
        ";

        $query = $this->_db->query($statement);
        return $query->fetchAll();
    }        

/*---------------------------
    
----------------------------*/ 
    function getMessageCount()
    {
        $statement = "
            SELECT COUNT(*) AS count
            FROM message_template
        ";

        $query = $this->_db->query($statement);
        return $query->fetch();
    }

}

