<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Lead;
use Illuminate\Support\Facades\Mail;
use App\Mail\AdminLeadNotification;
use App\Mail\UserLeadConfirmation;
use App\Mail\KartosAdminLeadNotification;
use App\Mail\KartosUserLeadConfirmation;

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

        Mail::to(env('MAIL_FROM_ADDRESS'))
            ->send(new AdminLeadNotification($lead));

        Mail::to($lead->email)
            ->send(new UserLeadConfirmation($lead));

        return response()->json([
            'message' => 'Lead submitted successfully.'
        ], 200);
    }

    public function kartosStore(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:100',
            'email' => 'required|email|max:150',
            'company' => 'nullable|string|max:150',
            'phone' => 'nullable|string|max:20',
            'message' => 'required|string|max:2000',
        ]);

        $lead = Lead::create($validated);

        // Admin notification via Kartos SMTP
        Mail::mailer('smtp_kartos')
            ->to(env('MAIL_SECOND_FROM_ADDRESS'))
            ->send(
                (new KartosAdminLeadNotification($lead))
                    ->from(env('MAIL_SECOND_FROM_ADDRESS'), env('MAIL_SECOND_FROM_NAME'))
            );

        // User confirmation via Kartos SMTP
        Mail::mailer('smtp_kartos')
            ->to($lead->email)
            ->send(
                (new KartosUserLeadConfirmation($lead))
                    ->from(env('MAIL_SECOND_FROM_ADDRESS'), env('MAIL_SECOND_FROM_NAME'))
            );

        return response()->json([
            'message' => 'Sales lead submitted successfully.'
        ], 200);
    }
}