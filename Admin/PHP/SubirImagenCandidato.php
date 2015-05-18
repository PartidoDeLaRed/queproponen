<?php
/*
UploadiFive
Copyright (c) 2012 Reactive Apps, Ronnie Garcia
*/

// Set the upload directory
$uploadDir = implode('/', explode('/',getcwd(),-2)).'/IMG/candidatos/';

if (!empty($_FILES)) {
	$tempFile   = $_FILES['Filedata']['tmp_name'];
	$targetFile = $uploadDir . $_POST['name'];

	// Set the allowed file extensions
	$fileTypes = array('jpg', 'jpeg', 'gif', 'png'); // Allowed file extensions

	// Validate the filetype
	$fileParts = pathinfo($_FILES['Filedata']['name']);

	if (in_array(strtolower($fileParts['extension']), $fileTypes)) {

		// Save the file
		if(move_uploaded_file($tempFile, $targetFile))
			echo $_POST['name'];
		else
			echo 'Error '.$targetFile;

	} else {

		// The file type wasn't allowed
		echo 'Invalid file type.';

	}

} else {

	echo 'No file!';

}
?>