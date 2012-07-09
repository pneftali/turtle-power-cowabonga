<?php
 
class Application_Model_Imageresizer
{
    protected $oldPath;    
 
 /*  --------------------------------------------------
    Resize Image
    -------------------------------------------------- */

    public function __construct($oldPath)
    {
        $this->oldPath = $oldPath;
    }

    public function resize($w, $h, $newPath)
    {            
        try
        {
            /*** a new imagick object ***/
            $im = new Imagick();

            /*** ping the image ***/
            $im->pingImage($this->oldPath);


            /*** read the image into the object ***/
            $im->readImage( $this->oldPath );

            /*** thumbnail the image ***/
            $im->thumbnailImage( $w, $h, null );

            /*** Write the thumbnail to disk ***/
            $im->writeImage( $newPath );

            /*** Free resources associated with the Imagick object ***/
            $im->destroy();

            //echo 'Thumbnail Created';
        }
        catch(Exception $e)
        {
            echo 'Caught exception: ',  $e->getMessage(), "\n";
        }
    }
 


}

