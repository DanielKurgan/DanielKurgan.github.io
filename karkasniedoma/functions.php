<?php
/**
 * Travelia functions and definitions
 *
 * @link https://developer.wordpress.org/themes/basics/theme-functions/
 *
 * @package Travelia
 */

if ( ! function_exists( 'travelia_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 *
	 * Note that this function is hooked into the after_setup_theme hook, which
	 * runs before the init hook. The init hook is too late for some features, such
	 * as indicating support for post thumbnails.
	 */
	function travelia_setup() {
		/*
		 * Make theme available for translation.
		 * Translations can be filed in the /languages/ directory.
		 * If you're building a theme based on Travelia, use a find and replace
		 * to change 'travelia' to the name of your theme in all the template files.
		 */
		load_theme_textdomain( 'travelia', get_template_directory() . '/languages' );

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
			'menu-1' => esc_html__( 'Primary', 'travelia' ),
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
		add_theme_support( 'custom-background', apply_filters( 'travelia_custom_background_args', array(
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
add_action( 'after_setup_theme', 'travelia_setup' );

/**
 * Set the content width in pixels, based on the theme's design and stylesheet.
 *
 * Priority 0 to make it available to lower priority callbacks.
 *
 * @global int $content_width
 */
function travelia_content_width() {
	// This variable is intended to be overruled from themes.
	// Open WPCS issue: {@link https://github.com/WordPress-Coding-Standards/WordPress-Coding-Standards/issues/1043}.
	// phpcs:ignore WordPress.NamingConventions.PrefixAllGlobals.NonPrefixedVariableFound
	$GLOBALS['content_width'] = apply_filters( 'travelia_content_width', 640 );
}
add_action( 'after_setup_theme', 'travelia_content_width', 0 );

/**
 * Register widget area.
 *
 * @link https://developer.wordpress.org/themes/functionality/sidebars/#registering-a-sidebar
 */
function travelia_widgets_init() {
	register_sidebar( array(
		'name'          => esc_html__( 'Footer Widget 1', 'travelia' ),
		'id'            => 'footer-1',
		'description'   => esc_html__( 'Add widgets here.', 'travelia' ),
		'before_widget' => '<div id="%1$s" class="single-widget about %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer Widget 2', 'travelia' ),
		'id'            => 'footer-2',
		'description'   => esc_html__( 'Add widgets here.', 'travelia' ),
		'before_widget' => '<div id="%1$s" class="single-widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer Widget 3', 'travelia' ),
		'id'            => 'footer-3',
		'description'   => esc_html__( 'Add widgets here.', 'travelia' ),
		'before_widget' => '<div id="%1$s" class="single-widget %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => esc_html__( 'Footer Widget 4', 'travelia' ),
		'id'            => 'footer-4',
		'description'   => esc_html__( 'Add widgets here.', 'travelia' ),
		'before_widget' => '<div id="%1$s" class="single-widget contact-info %2$s">',
		'after_widget'  => '</div>',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );

	register_sidebar( array(
		'name'          => __( 'Google map iframe', 'travelia' ),
		'id'            => 'google-map',
		'description'   => __( 'Add widgets here.', 'travelia' ),
		'before_widget' => '',
		'after_widget'  => '',
		'before_title'  => '<h2 class="widget-title">',
		'after_title'   => '</h2>',
	) );
}



add_action( 'widgets_init', 'travelia_widgets_init' );

/**
 * Enqueue scripts and styles.
 */
require get_template_directory() . '/inc/enqueue.php';


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
 *  Partials for Selective Refresh Customizer
 */
require get_template_directory() . '/inc/customizer/customizer-partials-function.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/inc/customizer/customizer.php';


/**
* Bootstrap Navwalker
*/
require get_template_directory() . '/inc/wp-bootstrap-navwalker.php';


/**
 * Breadcrumbs Trail
 */
require get_template_directory() . '/inc/breadcrumbs.php';

/**
 * Check if Wp Travel Engine Plugin is installed
*/
function travelia_is_wpte_activated(){
	return class_exists( 'Wp_Travel_Engine' ) ? true : false;
}


if( ! function_exists( 'travelia_get_trip_currency' ) ) :
/**
 * Get currency for WP Travel Engine Trip
*/
function travelia_get_trip_currency(){
	$currency = '';
	if( travelia_is_wpte_activated() ){
		$wpte_setting = get_option( 'wp_travel_engine_settings', true ); 
		$code = 'USD';
		if( isset( $wpte_setting['currency_code'] ) && $wpte_setting['currency_code']!= '' ){
			$code = $wpte_setting['currency_code'];
		} 
		$obj = new Wp_Travel_Engine_Functions();
		$currency = $obj->wp_travel_engine_currencies_symbol( $code );
	}
	return $currency;
}
endif;

if ( is_admin() ) {
	// Load about.
	
	require_once trailingslashit( get_template_directory() ) . 'inc/theme-info/class-about.php';
	require_once trailingslashit( get_template_directory() ) . 'inc/theme-info/about.php';
}

/*
* Function to list post categories in customizer options
*/
function travelia_get_categories( $select = true, $taxonomy = 'category', $slug = false ){
	
	/* Option list of all categories */
	$categories = array();
	if( $select ) $categories[''] = __( 'Choose Category', 'travelia' );
	
	if( taxonomy_exists( $taxonomy ) ){
		$args = array( 
			'hide_empty' => false,
			'taxonomy'   => $taxonomy 
		);
		
		$catlists = get_terms( $args );
		
		foreach( $catlists as $category ){
			if( $slug ){
				$categories[$category->slug] = $category->name;
			}else{
				$categories[$category->term_id] = $category->name;    
			}        
		}
	}
	return $categories;
}

function travelia_check_wp_engine_plugin_activation()
{
	include_once( ABSPATH . 'wp-admin/includes/plugin.php' );
	return is_plugin_active( 'wp-travel-engine/wp-travel-engine.php' );
}

if( ! function_exists( 'travelia_get_trip_currency' ) ) :
/**
 * Get currency for WP Travel Engine Trip
*/
function travelia_get_trip_currency(){
	$currency = '';
	if( travel_company_is_wpte_activated() ){
		$wpte_setting = get_option( 'wp_travel_engine_settings', true ); 
		$code = 'USD';
		if( isset( $wpte_setting['currency_code'] ) && $wpte_setting['currency_code']!= '' ){
			$code = $wpte_setting['currency_code'];
		} 
		$obj = new Wp_Travel_Engine_Functions();
		$currency = $obj->wp_travel_engine_currencies_symbol( $code );
	}
	return $currency;
}
endif;

function travelia_bs_pagination($pages = '', $range = 4)
{  
	$showitems = ($range * 2) + 1;  
	$paged = get_query_var( 'paged');

	if(empty($paged)) $paged = 1;
	if($pages == '')
	{
		global $wp_query; 
		$pages = $wp_query->max_num_pages;
		if(!$pages)
		{
			$pages = 1;
		}
	}   

	if(1 != $pages)
	{
		echo '<ul class="pagination-list">';
		for ($i=1; $i <= $pages; $i++)
		{
			if (1 != $pages &&( !($i >= $paged+$range+1 || $i <= $paged-$range-1) || $pages <= $showitems ))
			{
				echo ($paged == $i)? "<li class=\"page-item active\"><a href='".esc_url(get_pagenum_link($i))."' class='page-link'>".esc_html($i)."</a></li>":"<li class='page-item'><a href='".esc_url(get_pagenum_link($i))."' class='page-link'>".esc_html($i)."</a></li>";
			}
		}

		if ($paged < $pages ) echo "<li class='page-item next'><a href=\"".esc_url(get_pagenum_link($paged + 1))."\" class='page-link'>".esc_html__('Next Page','travelia')."</a></li>";  
		echo "</ul>";
	}
}
/**
 * Load Jetpack compatibility file.
 */
if ( defined( 'JETPACK__VERSION' ) ) {
	require get_template_directory() . '/inc/jetpack.php';
}

/**
 * Enqueue scripts and styles.
 */
function karkasniedoma_scripts() {

    // NOT DEFAULT
    wp_enqueue_style( 'stylecss', get_template_directory_uri() . '/inc/css/style.css' );
    wp_enqueue_style( 'mediacss', get_template_directory_uri() . '/inc/css/media.css' );
    wp_enqueue_style( 'fontscss', get_template_directory_uri() . '/inc/css/fonts.css' );
    wp_enqueue_script( 'jquery' );
    wp_enqueue_script( 'interactivejs', get_template_directory_uri() . '/inc/js/interactive.js' );
    // DEFAULT
    wp_enqueue_style( 'karkasniedoma-style', get_stylesheet_uri() );

    wp_enqueue_script( 'karkasniedoma-navigation', get_template_directory_uri() . '/js/navigation.js', array(), '20151215', true );

    wp_enqueue_script( 'karkasniedoma-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20151215', true );

    if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
        wp_enqueue_script( 'comment-reply' );
    }
}
add_action( 'wp_enqueue_scripts', 'karkasniedoma_scripts' );

function font_awesome() {
  if (!is_admin()) {
    wp_register_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.6.3/css/font-awesome.min.css');
    wp_enqueue_style('font-awesome');
  }
}
add_action('wp_enqueue_scripts', 'font_awesome');

function new_scripts() {
	wp_enqueue_style( 'bootstrap-style', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css', array(), '4.3.1' );
	wp_enqueue_script( 'bootstrap-js', 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js', array( 'jquery' ), '4.3.1', true );
	
	wp_enqueue_style( 'fancybox-style', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css' );
	wp_enqueue_script( 'fancybox-js', 'https://cdnjs.cloudflare.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js', true );
}
add_action( 'wp_enqueue_scripts', 'new_scripts' );

/**
* Определим константу, которая будет хранить путь к папке single
*/
define( SINGLE_PATH, TEMPLATEPATH . '/single' );
 
/**
* Добавим фильтр, который будет запускать функцию подбора шаблонов
*/
add_filter( 'single_template', 'my_single_template' );
 
/**
* Функция для подбора шаблона
*/
function my_single_template( $single ) {
    global $wp_query, $post;
 
    /**
     * Проверяем наличие шаблонов по ID поста.
     * Формат имени файла: single-ID.php
     */
    if ( file_exists( SINGLE_PATH . '/single-' . $post->ID . '.php' ) ) {
        return SINGLE_PATH . '/single-' . $post->ID . '.php';
    }
 
    /**
     * Проверяем наличие шаблонов для категорий, ищем по ID категории или слагу
     * Формат имени файла: single-cat-SLUG.php или single-cat-ID.php
     */
    foreach ( (array) get_the_category() as $cat ) :
 
        if ( file_exists( SINGLE_PATH . '/single-cat-' . $cat->slug . '.php' ) ) {
            return SINGLE_PATH . '/single-cat-' . $cat->slug . '.php';
        } elseif ( file_exists( SINGLE_PATH . '/single-cat-' . $cat->term_id . '.php' ) ) {
            return SINGLE_PATH . '/single-cat-' . $cat->term_id . '.php';
        }
 
    endforeach;
 
    /**
     * Проверяем наличие шаблонов для тэгов, ищем по ID тэга или слагу
     * Формат имени файла: single-tag-SLUG.php или single-tag-ID.php
     */
    $wp_query->in_the_loop = true;
    foreach ( (array) get_the_tags() as $tag ) :
 
        if ( file_exists( SINGLE_PATH . '/single-tag-' . $tag->slug . '.php' ) ) {
            return SINGLE_PATH . '/single-tag-' . $tag->slug . '.php';
        } elseif ( file_exists( SINGLE_PATH . '/single-tag-' . $tag->term_id . '.php' ) ) {
            return SINGLE_PATH . '/single-tag-' . $tag->term_id . '.php';
        }
 
    endforeach;
    $wp_query->in_the_loop = false;
 
    /**
     * Если ничего не найдено открываем стандартный single.php
     */
    if ( file_exists( SINGLE_PATH . '/single.php' ) ) {
        return SINGLE_PATH . '/single.php';
    }
 
    return $single;
}

// СКЛОНЯЕМ СПАЛЬНИ
/**
 * Склонение слова после числа.
 *
 * Примеры вызова:
 * num_decline( $num, 'книга,книги,книг' )
 * num_decline( $num, [ 'книга','книги','книг' ] )
 * num_decline( $num, 'книга', 'книги', 'книг' )
 * num_decline( $num, 'книга', 'книг' )
 *
 * @param  int|string    $number  Число после которого будет слово. Можно указать число в HTML тегах.
 * @param  string|array  $titles  Варианты склонения или первое слово для кратного 1.
 * @param  string        $param2  Второе слово, если не указано в параметре $titles.
 * @param  string        $param3  Третье слово, если не указано в параметре $titles.
 *
 * @return string 1 книга, 2 книги, 10 книг.
 *
 * @version 2.0
 */
function num_decline( $number, $titles, $param2 = '', $param3 = '' ){

	if( $param2 )
		$titles = [ $titles, $param2, $param3 ];

	if( is_string($titles) )
		$titles = preg_split( '/, */', $titles );

	if( empty($titles[2]) )
		$titles[2] = $titles[1]; // когда указано 2 элемента

	$cases = [ 2, 0, 1, 1, 1, 2 ];

	$intnum = abs( intval( strip_tags( $number ) ) );

	return "$number ". $titles[ ($intnum % 100 > 4 && $intnum % 100 < 20) ? 2 : $cases[min($intnum % 10, 5)] ];
}
