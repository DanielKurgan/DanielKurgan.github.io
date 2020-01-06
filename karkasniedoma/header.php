<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Travelia
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php 
  		if ( function_exists( 'wp_body_open' ) )
    	wp_body_open();
  	?>
	<a class="skip-link screen-reader-text" href="#content">
	<?php _e( 'Skip to content', 'travelia' ); ?></a>
	<!-- Header Area -->
	<header id="site-header" class="site-header ">
		<!-- Start Topbar -->
		<?php get_template_part( 'header-parts/header', 'topbar' );?>
		<!--/ End Topbar -->
		<!-- Middle Header -->
		<?php get_template_part( 'header-parts/header', 'middle' );?>
		<!-- End Middle Header -->
		<!-- Header Bottom -->
		<?php get_template_part( 'header-parts/header', 'bottom' );?>
		<!--/ End Header Bottom -->
	</header>
	<!--/ End Header Area -->