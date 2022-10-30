<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactGroupRequest;
use App\Http\Resources\V1\ContactGroupResource;
use App\Models\ContactGroup;
use Illuminate\Http\Request;

class ContactGroupController extends Controller
{
    public function index(){
        return ContactGroupResource::collection(ContactGroup::all());
    }

    public function show(ContactGroup $contactGroup){
        return new ContactGroupResource($contactGroup);
    }

    public function store(StoreContactGroupRequest $request){
        ContactGroup::create($request->validated());
        return response()->json("Contact Group Created");
    }

    public function update(StoreContactGroupRequest $request, ContactGroup $contactGroup){
        $contactGroup->update($request->validated());
        return response()->json("Contact Group Updated!");
    }

    public function destroy(ContactGroup $contactGroup){
        $contactGroup->delete();
        return response()->json("Contact Group Deleted!");
    }
}
