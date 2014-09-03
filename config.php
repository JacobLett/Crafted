<?php
/**
 * Configuration File
 *
 * Sets up variables specific for a template.
 * It can also be used to run PHP code for a template.
 *
 * @version 1.0
 *
 */

// The name of the template, as it will appear in the Theme Store
$GLOBALS['TPL_CFG']['Name'] = 'Crafted';

// Enable or disable Internationalization(I18N and L10N) for this theme
$GLOBALS['TPL_CFG']['International'] = false;

// The physical name of the template, as determined by the directory it is stored within.
$GLOBALS['TPL_CFG']['PhysicalName'] = basename(__DIR__);

// The version of the template, as it will appear in the control panel
$GLOBALS['TPL_CFG']['Version'] = '1.0';

$GLOBALS['TPL_CFG']['Premium'] = array(
    // price in cents / $165
    'price' => 16500,
    'currency' => 'usd',
    'partner' => '',
);

$GLOBALS['TPL_CFG']['Partner'] = array(
    'Name' => 'Bootstrap Creative',
    'Contact' => 'http://bootstrapcreative.com/contact-us/',
    'Email' => 'jacoblett@bootstrapcreative.com',
);

// Make the theme editable with the Style Editor.
$GLOBALS['TPL_CFG']['StyleEditable'] = false;

$GLOBALS['TPL_CFG']['Responsive'] = true;

$GLOBALS['TPL_CFG']['FeaturesTextArray'] = array(
	"Responsive design so your store works across desktops, tablets, and mobile devices",
	"Prominent search box to help visitors find products and help you see what products people are looking for that you may be missing from your inventory",
	"Email newsletter signup in footer to help you build an email list",
	"Minimalistic checkout page to limit distractions and encourage checkout completions",
	"Encourage visitors to share with social media buttons on product pages and Pinterest image buttons in the blog",
	"Sale and sold out messaging appear on product listings to help customers find deals and avoid frustration",
	"You can easily change theme colors using the Style Editor to match your existing logo",
	//Advanced Settings
	"Communicate your store’s unique selling proposition in your header",
	"Customize your profile box to highlight your personal brand and give insight into your creative process",
	"Customize the search box placeholder text to quickly tell a visitor what you sell",
	"Image banner support to help with product merchandising and browsing your entire store",
	"Add a price to your product carousel to change the button into a price tag",
	"Add a bullet list of product features next to the “Add to Cart” button on the product page. This will help people who are skimming the page and are ready to make a purchase",
	"Turn on a pop-up advertisement to encourage email signups, promote a new product, or get to know your visitors through a customer survey",
	"Customize what payment graphics to show in the footer",
	"Graphic support files are included to help you create new graphics for your store (PSD files, fonts, color reference)",
	"Change the newsletter signup headline to promote a coupon code offer after signing up",
);

// List of supported devices
// e.g. "This theme has been tested and approved for use on Chrome, Safari, Firefox, Opera, IE8+, Apple iOS, Android and Windows Mobile Devices."
$GLOBALS['TPL_CFG']['DevicesText'] = "This theme has been tested and approved for use on Chrome, Safari, Firefox, Opera, IE8+, Apple iOS, Android and Windows Mobile Devices";

// Theme details/description; supports HTML.
$GLOBALS['TPL_CFG']['DescriptionHtml'] = "<p>The Crafted theme is designed for makers of handmade products. Showcase your latest designs and let new visitors get to know you right from the homepage. The prominent search box will give your visitors quick access to find your products. Also since Bigcommerce tracks every search keyword, you will have valuable insight into what your customers want to buy. Your customers will feel right at home with the subtle design cues similar to what is found on Etsy or Pinterest. Social media buttons will encourage them to share your products and blog posts with their friends. If you want to build your brand and sell more of your handmade products this theme is crafted just for you.</p>";


// Recommended dimensions of a logo when it's displayed in the header of this template
$GLOBALS['TPL_CFG']['LogoWidth'] = 250;
$GLOBALS['TPL_CFG']['LogoHeight'] = 100;

// Recommended dimensions of carousel images
$GLOBALS['TPL_CFG']['SlideShowWidth'] = 800;
$GLOBALS['TPL_CFG']['SlideShowHeight'] = 520;

// The maximum width an image uploaded in DevEdit can be before it's resized.
// This is used to make sure product images uploaded in DevEdit don't stretch
// out past the main content area of the template
$GLOBALS['TPL_CFG']['MaxImageWidth'] = 575;

// The maximum number of products that can be compared side-by-side without
// messing up the layout of the template
$GLOBALS['TPL_CFG']['MaxComparisonProducts'] = 4;

// The "Powered by" line that this template should use.
// These lines can be adjusted in /includes/whitelabel.php
$GLOBALS['TPL_CFG']['PoweredBy'] = 5;

$GLOBALS['TPL_CFG']['NewsPreviewLength']    = 80;
$GLOBALS['TPL_CFG']['MaxHomePageNewsItems'] = 3;

$GLOBALS['TPL_CFG']['EnableFlyoutMenuSupport'] = true;

$GLOBALS['TPL_CFG']['SupportsSettings'] = true;
$GLOBALS['TPL_CFG']['Features']         = 1 | 2; // Theme::FEATURE_CAROUSEL | Theme::FEATURE_SOCIAL_ICONS

$GLOBALS['TPL_CFG']['RecommendedCategoryImageWidth']  = 180;
$GLOBALS['TPL_CFG']['RecommendedCategoryImageHeight'] = 250;

$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesStorewideThumbnail_width']       = 190;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesStorewideThumbnail_height']      = 250;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesStorewideThumbnail_timeChanged'] = time();

$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesProductPageImage_width']       = 500;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesProductPageImage_height']      = 659;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesProductPageImage_timeChanged'] = time();

$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesGalleryThumbnail_width']       = 60;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesGalleryThumbnail_height']      = 79;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesGalleryThumbnail_timeChanged'] = time();

$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesZoomImage_width']       = 1280;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesZoomImage_height']      = 1280;
$GLOBALS['TPL_CFG']['ConfigDefaults']['ProductImagesZoomImage_timeChanged'] = time();

$GLOBALS['TPL_CFG']['ConfigDefaults']['CustomersAlsoViewedCount'] = 5;
$GLOBALS['TPL_CFG']['ConfigDefaults']['HomeFeaturedProducts']     = 5;
$GLOBALS['TPL_CFG']['ConfigDefaults']['HomeNewProducts']          = 5;
$GLOBALS['TPL_CFG']['ConfigDefaults']['CategoryProductsPerPage']  = 20;

$GLOBALS['TPL_CFG']['ConfigDefaults']['enableMobileTemplate'] = !$GLOBALS['TPL_CFG']['Responsive'];
$GLOBALS['TPL_CFG']['ConfigDefaults']['SocialMedia_UseThemeIcons'] = 1;

$GLOBALS['TPL_CFG']['CategoryFlyoutClass'] = 'sf-horizontal';

$GLOBALS['TPL_CFG']['Fonts'] = array(
    'Open Sans' => array(
        'type' => 'css',
        'url' => '//fonts.googleapis.com/css?family=Open+Sans:300,700',
        'contextsRequiredBy' => array(
            'design',
        ),
    ),
);


$GLOBALS['TPL_CFG']['Stylesheets'] = array(
    array(
        'stylesheet' => 'Styles/iselector.css',
    ),
    array(
        'stylesheet' => 'Styles/flexslider.css',
    ),
    array(
        'stylesheet' => 'Styles/slide-show.css',
    ),
    array(
        'stylesheet' => 'Styles/base-forms.css',
    ),
    array(
        'stylesheet' => 'Styles/crafted.min.css',
    ),
    array(
        'stylesheet' => 'Styles/light.css',
    ),
    array(
        'stylesheet' => 'Styles/styles-slide-show.css',
    ),
    array(
        'stylesheet' => 'Styles/social.css',
    ),
    array(
        'stylesheet' => 'Styles/styles.css',
    ),
    array(
        'stylesheet' => 'Styles/' . Store_Config::get('SiteColor') . '.css',
    ),
    array(
        'stylesheet' => 'Styles/theme.css',
    ),
    array(
        'stylesheet' => 'Styles/grid.css',
    ),
    array(
        'stylesheet' => 'Styles/custom.css',
    ),
    array(
        'stylesheet' => 'Styles/responsive.css',
    ),
    array(
        'stylesheet' => 'Styles/theme.css',
    ),
);

// URL of a demo store in following format "http://theme-name-demo.mybigcommerce.com"
$GLOBALS['TPL_CFG']['DemoStore'] = "http://crafted-demo.mybigcommerce.com";

// Is theme enabled? (i.e. visible in Theme Store)
$GLOBALS['TPL_CFG']['Enabled'] = Store_Feature::isEnabled('CraftedTheme');
