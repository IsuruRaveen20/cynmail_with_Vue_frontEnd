<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactGroupRequest;
use App\Http\Resources\V1\ContactGroupResource;
use App\Models\ContactGroup;
use Illuminate\Http\Request;

class ContactGroupController extends Controller
{
    /*
    -Index function
    -Load All contactGroups
    */
    public function index(){
        return ContactGroupResource::collection(ContactGroup::all());
    }

    /*
    -Show function
    -Display contactGroup
    */
    public function show(ContactGroup $contactGroup){
        return new ContactGroupResource($contactGroup);
    }

    /*
    -store function
    -Store contactGroup
    */
    public function store(StoreContactGroupRequest $request){
        ContactGroup::create($request->validated());
        return response()->json("Contact Group Created");
    }

    /*
    -update function
    -Update contactGroup
    */
    public function update(StoreContactGroupRequest $request, ContactGroup $contactGroup){
        $contactGroup->update($request->validated());
        return response()->json("Contact Group Updated!");
    }

    /*
    -Delete function
    -delete a contactGroup
    */
    public function destroy(ContactGroup $contactGroup){
        $contactGroup->delete();
        return response()->json("Contact Group Deleted!");
    }
}
