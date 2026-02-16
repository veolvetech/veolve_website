<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead;
use Illuminate\Support\Facades\Mail;
use App\Mail\AdminLeadNotification;
use App\Mail\UserLeadConfirmation;

class ContactController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'company' => 'nullable|string|max:150',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|max:2000',
        ]);

        $lead = Lead::create($validated);

        // Send email to admin
        Mail::to(env('MAIL_FROM_ADDRESS'))
            ->send(new AdminLeadNotification($lead));

        // Send confirmation to user
        Mail::to($lead->email)
            ->send(new UserLeadConfirmation($lead));

        return response()->json([
            'message' => 'Lead submitted successfully.'
        ], 200);
    }
}
