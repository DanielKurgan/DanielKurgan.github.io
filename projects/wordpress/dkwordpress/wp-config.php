<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define( 'DB_NAME', 'dkwp_base' );

/** Имя пользователя MySQL */
define( 'DB_USER', 'dkwp_admin' );

/** Пароль к базе данных MySQL */
define( 'DB_PASSWORD', 'admin' );

/** Имя сервера MySQL */
define( 'DB_HOST', 'localhost' );

/** Кодировка базы данных для создания таблиц. */
define( 'DB_CHARSET', 'utf8mb4' );

/** Схема сопоставления. Не меняйте, если не уверены. */
define( 'DB_COLLATE', '' );

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'vG|e&CUVjk2?5mv1QEx%;&nUY)1?B OX6o:5><tZ]]+BKf!?U.p=FYtv1In~H+2W' );
define( 'SECURE_AUTH_KEY',  'Mofa>^g=ek|v-BcgGS]5[o&uW~ yC`FiXpV;m;y5$|,1le`w`H0A)WBA^l&rF1(K' );
define( 'LOGGED_IN_KEY',    'qXT?+.&%E|3Gag>ATHmtf.Q@pJT)+3L.Qu/N>JAY]!qtn{L$9yu^W9ud%Usz^sUU' );
define( 'NONCE_KEY',        '^{^;9[>`8qC~|D~OTZDUBhzByb6~|wk*Yc,~*:B#B1C7.IIBFcmW|CGr0MQ*$c]T' );
define( 'AUTH_SALT',        '.l3c0%)Z&}mY;XqYw]@ew5(;9T{Ialrdw+4@85)D-n#.U4o24v)ro,scCSfXk}L7' );
define( 'SECURE_AUTH_SALT', 'q&EN|XZPqE],YwWos?7,U+fbBC,23f6#]&w-w=5j%g1N6Thd,7rN@XG@d_;okRI1' );
define( 'LOGGED_IN_SALT',   'nDBc8vGK{5NUUtC02_xjfTCGcx~,TY c0_Erw)bck86^fEFysK+>`i-;V[wQA`+9' );
define( 'NONCE_SALT',       'S/XU|;>m&Vj&W[Cw<c*?dGC2-W|R[Oxo|1S~C$V,PY!m_JVU+0TPpCn;X_<=gSB|' );

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', TRUE );

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Инициализирует переменные WordPress и подключает файлы. */
require_once( ABSPATH . 'wp-settings.php' );
