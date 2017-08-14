<?php require_once 'connect.php'; require_once 'functions.php'; ?>
<!doctype html>
<html>
	<head>
		<title>YouTube Comment System Series</title>
		<meta charset="UTF-8" lang="en-US">
		<link rel="stylesheet" href="style.css">
		<script src="https://code.jquery.com/jquery-3.0.0.min.js"></script>
		<script src="global.js"></script>
	</head>
	<body>
		<div class="page-container">
			<?php 
				get_total();
				require_once 'check_com.php';
			?>
			<form action="" method="post" class="main">
				<label>enter a brief comment</label>
				<textarea class="form-text" name="comment" id="comment"></textarea>
				<br />
				<input type="submit" class="form-submit" name="new_comment" value="post">
			</form>
			<?php get_comments(); ?>
		</div>
	</body>
</html>