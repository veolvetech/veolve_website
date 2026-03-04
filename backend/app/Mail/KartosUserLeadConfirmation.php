<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class KartosUserLeadConfirmation extends Mailable
{
    public $lead;

    public function __construct($lead)
    {
        $this->lead = $lead;
    }

    public function build()
    {
        return $this->subject('Your Kartos Project Inquiry')
            ->view('emails.kartos-user-confirmation');
    }
}