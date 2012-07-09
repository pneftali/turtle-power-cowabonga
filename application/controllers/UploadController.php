<?php

class UploadController extends Zend_Controller_Action
{
    protected $_instance;
    protected $_json;

    public function init()
    {           
        $this->_instance = Zend_Auth::getInstance();
        if(!$this->_instance->hasIdentity())
            $this->_helper->redirector('index','login'); 

        $this->_json = array('m' => '');                        
    }

    public function indexAction()
    {

    }

    public function uploadFileAction()
    {
        $this->disableLayout();

        $identityObject = $this->_instance->getIdentity();

        $doc_root       = $_SERVER['DOCUMENT_ROOT'];
        $path           = "/images/profile/";
        $path_small     = "/images/small/";

        $valid_formats = array("jpg", "png", "gif", "bmp", "jpeg", "JPG", "PNG", "GIF", "BMP", "JPEG");
        if(isset($_POST) and $_SERVER['REQUEST_METHOD'] == "POST")
        {
            $name = $_FILES['file']['name'];
            $size = $_FILES['file']['size'];
            
            if(strlen($name)) {
                list($txt, $ext) = explode(".", $name);
                if(in_array($ext,$valid_formats)){
                    if($size<(1024*1024)){


                        $actual_image_name = time().substr(str_replace(" ", "_", $txt), 5).".".$ext;
                        $tmp = $_FILES['file']['tmp_name'];


                        /*  --------------------------------------------------
                            This part here the image has been uploaded.
                            -------------------------------------------------- */
                        if(move_uploaded_file($tmp, $doc_root.$path.$actual_image_name)){                                                           

                            $oldPath        = $doc_root.$path.$actual_image_name;

                            $filename       = hash('md5', $identityObject->email).".".$ext;
                            $newPath        = $doc_root.$path.$filename;
                            $newPathSmall   = $doc_root.$path_small.$filename;

                            $img        = new Application_Model_Imageresizer($oldPath);
                            $img->resize('57', '61', $newPath);
                            $img->resize('25', '32', $newPathSmall);

                            /** lets not do the updating here 
                            // Update the employee table                            
                            $employeeModel   = new Application_Model_DbTable_Employee();
                            $employeeModel->updateImagePath($identityObject->employee_code, $path.$filename, $path_small.$filename);                            

                            // Update the session
                            $identityObject->profile_img_path   = $path.$filename;
                            $identityObject->avatar_path        = $path_small.$filename;
                            **/

                            // lets do this intead
                            $ns = new Zend_Session_Namespace( 'image_path' );
                            $ns->profile_img_path       = $path.$filename;
                            $ns->profile_avatar_path    = $path_small.$filename;
                            
                            echo "<img src='/images/profile/".$filename."'  class='preview'>";

                        } else
                            echo "failed";


                    } else
                    echo "Image file size max 1 MB";                    
                } else
                    echo "Invalid file format..";   
            } else
                echo "Please select image..!";

            exit;
        }
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


    

}