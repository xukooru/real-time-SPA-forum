<?php


use Illuminate\Support\Facades\Route;

Route::apiResource('/question', 'QuestionController');
Route::apiResource('/category', 'CategoryController');
Route::apiResource('/question/{question}/reply', 'ReplyController');

Route::post('/like/{reply}', 'LikeController@likeit');
Route::delete('/like/{reply}', 'LikeController@unLikeit');
