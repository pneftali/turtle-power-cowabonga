<?php
 
class Application_Model_Employee
{
    protected $_dbTable;
 
 /*  --------------------------------------------------
    Initializing Employee Table
    -------------------------------------------------- */

    public function setDbTable($dbTable)
    {
        if (is_string($dbTable)) {
            $dbTable = new $dbTable();
        }
        if (!$dbTable instanceof Zend_Db_Table_Abstract) {
            throw new Exception('Invalid table data gateway provided');
        }
        $this->_dbTable = $dbTable;
        return $this;
    }
 
    public function getDbTable()
    {
        if (null === $this->_dbTable) {
            $this->setDbTable('Application_Model_DbTable_Employee');
        }
        return $this->_dbTable;
    }  

/*  --------------------------------------------------
    End initialization
    -------------------------------------------------- */

    public function autosearch($q, $divisionCode)
    {
        return $this->getDbTable()->search($q, $divisionCode);
    }




}

