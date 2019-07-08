<?php
/**
 * sokirka functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package sokirka
 */

if ( ! function_exists( 'sokirka_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function sokirka_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on sokirka, use a find and replace
		 * to change 'sokirka' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'sokirka', get_template_directory() . '/languages' );

		// Add default posts and comments RSS feed links to head.
		add_theme_support( 'automatic-feed-links' );

		/*
		 * Let WordPress manage the document title.
		 * By adding theme support, we declare that this theme does not use a
		 * hard-coded <title> tag in the document head, and expect WordPress to
		 * provide it for us.
		 */
		add_theme_support( 'title-tag' );

		/*
		 * Enable support for Post Thumbnails on posts and pages.
		 *
		 * @link https://developer.wordpress.org/themes/functionality/featured-images-post-thumbnails/
		 */
		add_theme_support( 'post-thumbnails' );

		// This theme uses wp_nav_menu() in one location.
		register_nav_menus( array(
			'header-navbar' => esc_html__( 'header-navbar', 'header-navbar' ),
		) );

		

		/*
		 * Switch default core markup for search form, comment form, and comments
		 * to output valid HTML5.
		 */
		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

		// Set up the WordPress core custom background feature.
		add_theme_support( 'custom-background', apply_filters( 'sokirka_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

		// Add theme support for selective refresh for widgets.
		add_theme_support( 'customize-selective-refresh-widgets' );

		/**
		 * Add support for core custom logo.
		 *
		 * @link https://codex.wordpress.org/Theme_Logo
		 */
		add_theme_support( 'custom-logo', array(
			'height'      => 250,
			'width'       => 250,
			'flex-width'  => true,
			'flex-height' => true,
		) );
	}
endif;
add_action( 'after_setup_theme', 'sokirka_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function sokirka_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'sokirka_content_width', 640 );
}
add_action( 'after_setup_theme', 'sokirka_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function sokirka_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Sidebar', 'sokirka' ),
		'id'            => 'sidebar-1',
		'description'   => esc_html__( 'Add widgets here.', 'sokirka' ),
		'before_widget' => '<section id="%1$s" class="widget %2$s">',
		'after_widget'  => '</section>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}
add_action( 'widgets_init', 'sokirka_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
function sokirka_scripts() {
	wp_deregister_script( 'jquery-core' );
	wp_register_script( 'jquery-core', '//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js');
	wp_enqueue_script( 'jquery' );

	wp_enqueue_style( 'style', get_template_directory_uri() );
	wp_enqueue_style( 'fonts.google', "https://fonts.googleapis.com/css?family=Lato:400,300,700" );
	wp_enqueue_style( 'normalize', get_template_directory_uri() . "/layouts/normalize.css" );
	wp_enqueue_style( 'main', get_template_directory_uri() . "/layouts/main.css" );
	wp_enqueue_style( 'bootstrap.min', get_template_directory_uri() . "/layouts/bootstrap.min.css" );
	wp_enqueue_style( 'font-awesome.min', get_template_directory_uri() . "/layouts/font-awesome.min.css" );
	wp_enqueue_style( 'owl.carousel', get_template_directory_uri() . "/layouts/owl.carousel.css" );
	wp_enqueue_style( 'responsive', get_template_directory_uri() . "/layouts/responsive.css" );
	wp_enqueue_style( 'sokirka-style', get_template_directory_uri() . "/layouts/sokirka-style.css" );


	wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.js', array(), '', true );
	wp_enqueue_script( 'plugins', get_template_directory_uri() . '/js/plugins.js', array(), '', true );
	wp_enqueue_script( 'common', get_template_directory_uri() . '/js/common.js', array(), '', true );

	wp_enqueue_script( 'appear', get_template_directory_uri() . '/js/libs/appear.js', array(), '', true );
	wp_enqueue_script( 'bootstrap.min', get_template_directory_uri() . '/js/libs/bootstrap.min.js', array(), '', true );
	wp_enqueue_script( 'html5shiv', get_template_directory_uri() . '/js/libs/html5shiv.js', array(), '', true );
	wp_enqueue_script( 'isotope.pkgd.min', get_template_directory_uri() . '/js/libs/isotope.pkgd.min.js', array(), '', true );
	wp_enqueue_script( 'jquery.counterup.min', get_template_directory_uri() . '/js/libs/jquery.counterup.min.js', array(), '', true );
	wp_enqueue_script( 'jquery.easing.min', get_template_directory_uri() . '/js/libs/jquery.easing.min.js', array(), '', true );
	wp_enqueue_script( 'jquery.nicescroll.min', get_template_directory_uri() . '/js/libs/jquery.nicescroll.min.js', array(), '', true );
	wp_enqueue_script( 'owl.carousel.min', get_template_directory_uri() . '/js/libs/owl.carousel.min.js', array(), '', true );
	wp_enqueue_script( 'scrolling-nav', get_template_directory_uri() . '/js/libs/scrolling-nav.js', array(), '', true );
	wp_enqueue_script( 'showHide', get_template_directory_uri() . '/js/libs/showHide.js', array(), '', true );
	wp_enqueue_script( 'waypoints.min', get_template_directory_uri() . '/js/libs/waypoints.min.js', array(), '', true );

	wp_enqueue_script( 'modernizr-2.8.3.min', get_template_directory_uri() . '/js/vendor/modernizr-2.8.3.min.js', array(), '', true );



	wp_enqueue_script( 'sokirka-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );
	wp_enqueue_script( 'sokirka-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'sokirka_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/inc/template-tags.php';

/**
 * Functions which enhance the theme by hooking into WordPress.
 */
require get_template_directory() . '/inc/template-functions.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer.php';

/**
 * Posttype additions.
 */
require get_template_directory() . '/inc/posttype.php';

/**
 * Redux Options Panel.
 */
require get_template_directory() . '/inc/sample-config.php';

/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

