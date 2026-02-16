<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Lead;
use Illuminate\Http\Request;

class LeadController extends Controller
{
    public function index()
    {
        $leads = Lead::latest()->paginate(10);
        return view('admin.leads.index', compact('leads'));
    }

    public function show(Lead $lead)
    {
        return view('admin.leads.show', compact('lead'));
    }

    public function updateStatus(Request $request, Lead $lead)
    {
        $request->validate([
            'status' => 'required|in:new,contacted,closed'
        ]);

        $lead->status = $request->status;

        if ($request->status === 'contacted') {
            $lead->contacted_at = now();
        }

        $lead->save();

        return back()->with('success', 'Lead updated successfully.');
    }

    public function destroy(Lead $lead)
    {
        $lead->delete();
        return back()->with('success', 'Lead deleted successfully.');
    }
}
