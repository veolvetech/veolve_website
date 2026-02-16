<x-app-layout>

    @section('content')
    <div class="max-w-4xl mx-auto px-6 py-8">

        <h1 class="text-2xl font-semibold mb-6">Lead Details</h1>

        <div class="bg-white shadow rounded-lg p-6 space-y-4">

            <p><strong>Name:</strong> {{ $lead->name }}</p>
            <p><strong>Email:</strong> {{ $lead->email }}</p>
            <p><strong>Company:</strong> {{ $lead->company }}</p>
            <p><strong>Phone:</strong> {{ $lead->phone }}</p>
            <p><strong>Status:</strong> {{ ucfirst($lead->status) }}</p>

            <div>
                <strong>Message:</strong>
                <div class="mt-2 p-4 bg-gray-50 rounded">
                    {{ $lead->message }}
                </div>
            </div>

            <form action="{{ route('admin.leads.status', $lead) }}" method="POST" class="mt-4">
                @csrf
                <select name="status" class="border rounded px-3 py-2">
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="closed">Closed</option>
                </select>

                <button class="ml-3 px-4 py-2 bg-black text-white rounded">
                    Update
                </button>
            </form>

        </div>

    </div>
</x-app-layout>