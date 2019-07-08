<?php
 global $redux_demo;
?>
<!doctype html>
<html class="no-js" lang="">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title>Sima</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="apple-touch-icon" href="apple-touch-icon.png">
        <?php wp_head(); ?>
    </head>
<body>


		 <!-- start preloader -->
        <div id="loader-wrapper">
            <div class="logo"></div>
            <div id="loader">
            </div>
        </div>
        <!-- end preloader -->
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        // <![endif]-->
		
		
<!-- Start Header Section -->
<header class="main_menu_sec navbar navbar-default navbar-fixed-top">
	<?php $custom_logo = $redux_demo["dk-logo"]["url"]; ?>
	<div class="container">
		<div class="row">
			<div class="col-lg-3 col-md-3 col-sm-12">
				<div class="lft_hd">
					<a href="<?php echo home_url("/"); ?>"> 
						<?php if($custom_logo){ ?>
							<img src="<?php echo esc_url($custom_logo); ?>" alt="#" />
						<?php } ?>
					</a>
				</div>
			</div>			
			<div class="col-lg-9 col-md-9 col-sm-12">
				<div class="rgt_hd">	

			
					<div class="main_menu">

						<nav id="nav_menu">menu-item-type-post_type
							<?php wp_nav_menu( array(
								'theme-location' => 'header-navbar',
								'menu_id' => 'navbar',
								'container' => 'ul'
								) ); 
							?>
						</nav>			
					</div>					
				</div>
			</div>	
		</div>	
	</div>	
</header>
 <!-- End Header Section -->
