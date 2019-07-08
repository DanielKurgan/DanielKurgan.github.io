<?php 
function intensive_custompost_type_gallery() {
    $labels = array(
        'name'                  => _x( 'Galleries', 'Post type general name', 'textdomain' ),
        'singular_name'         => _x( 'Gallery', 'Post type singular name', 'textdomain' ),
    );
 
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'gallery' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'thumbnail', ),
    );
	register_post_type('gallery', $args);
}
add_action( 'init', 'intensive_custompost_type_gallery');

function intensive_custompost_type_hotdeal() {
    $labels = array(
        'name'                  => _x( 'HotDeals', 'Post type general name', 'textdomain' ),
        'singular_name'         => _x( 'HotDeal', 'Post type singular name', 'textdomain' ),
    );
 
    $args = array(
        'labels'             => $labels,
        'public'             => true,
        'publicly_queryable' => true,
        'show_ui'            => true,
        'show_in_menu'       => true,
        'query_var'          => true,
        'rewrite'            => array( 'slug' => 'hotdeal' ),
        'capability_type'    => 'post',
        'has_archive'        => true,
        'hierarchical'       => false,
        'menu_position'      => null,
        'supports'           => array( 'title', 'editor', 'thumbnail', ),
    );
	register_post_type('hotdeal', $args);
}
add_action( 'init', 'intensive_custompost_type_hotdeal');

 ?>