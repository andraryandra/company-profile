<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\HomeController;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('component.index');
});

Route::get('index-2', function() {
    return view ('component.index-2');
});

Route::get('index-3', function() {
    return view('component.index-3');
});

Route::get('404', function() {
    return view('component.404');
});

Route::get('about-us', function() {
    return view('component.about-us');
});

Route::get('blog', function() {
    return view('component.blog');
});

Route::get('blog-details', function() {
    return view('component.blog-details');
});

Route::get('case-studies', function() {
    return view('component.case-studies');
});

Route::get('case-studies-details', function() {
    return view('component.case-studies-details');
});

Route::get('contact-us', function() {
    return view('component.contact-us');
});

Route::get('faq', function() {
    return view('component.faq');
});

Route::get('pricing', function() {
    return view('component.pricing');
});

Route::get('privacy-policy', function() {
    return view('component.privacy-policy');
});

Route::get('privecy-policy', function() {
    return view('component.privecy-policy');
});

Route::get('sign-in', function() {
    return view('component.sign-in');
});

Route::get('sign-up', function() {
    return view('component.sign-up');
});

Route::get('singn-up', function() {
    return view('component.singn-up');
});

Route::get('solutions-details', function() {
    return view('component.solutions-details');
});

Route::get('solutions', function() {
    return view('component.solutions');
});

Route::get('team', function() {
    return view('component.team');
});

Route::get('terms-condition', function() {
    return view('component.terms-condition');
});

Route::get('terms-conditions', function() {
    return view('component.terms-conditions');
});

Route::get('testimonials', function() {
    return view('component.testimonials');
});

Auth::routes();

Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');

