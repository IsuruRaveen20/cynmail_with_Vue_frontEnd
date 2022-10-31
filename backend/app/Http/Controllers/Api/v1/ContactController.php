<?php

namespace App\Http\Controllers\Api\v1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreContactRequest;
use App\Http\Resources\V1\ContactResource;
use App\Models\Contact;
use Illuminate\Http\Request;

class ContactController extends Controller
{
    /*
    -Index function
    -Load All contacts
    */
    public function index(){
        return ContactResource::collection(Contact::all());
    }

    /*
    -Show function
    -Display contact
    */
    public function show(Contact $contact){
        return new ContactResource($contact);
    }

    /*
    -store function
    -Store contacts
    */
    public function store(StoreContactRequest $request){
        Contact::create($request->validated());
        return response()->json("Contact Created");
    }

    /*
    -update function
    -Update contact
    */
    public function update(StoreContactRequest $request, Contact $contact){
        $contact->update($request->validated());
        return response()->json("Contact Updated!");
    }

    /*
    -Delete function
    -delete a contact
    */
    public function destroy(Contact $contact){
        $contact->delete();
        return response()->json("Contact Deleted!");
    }
}
