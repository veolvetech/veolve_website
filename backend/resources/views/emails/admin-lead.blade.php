<h2>New Lead Received</h2>

<p><strong>Name:</strong> {{ $lead->name }}</p>
<p><strong>Email:</strong> {{ $lead->email }}</p>
<p><strong>Company:</strong> {{ $lead->company }}</p>
<p><strong>Phone:</strong> {{ $lead->phone }}</p>
<p><strong>Message:</strong></p>

<p>{{ $lead->message }}</p>

<p><strong>Submitted At:</strong> {{ $lead->created_at }}</p>
