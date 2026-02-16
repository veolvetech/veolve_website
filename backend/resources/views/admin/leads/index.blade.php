<x-app-layout>

    <div class="max-w-7xl mx-auto px-6 py-8">

        <h1 class="text-2xl font-semibold mb-6">Leads</h1>

        @if(session('success'))
            <div class="mb-4 p-3 bg-green-100 text-green-700 rounded">
                {{ session('success') }}
            </div>
        @endif

        <div class="bg-white shadow rounded-lg overflow-hidden">
            <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Company</th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                        <th class="px-4 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
                    </tr>
                </thead>

                <tbody class="bg-white divide-y divide-gray-200">
                    @foreach($leads as $lead)
                        <tr>
                            <td class="px-4 py-3">{{ $lead->name }}</td>
                            <td class="px-4 py-3">{{ $lead->email }}</td>
                            <td class="px-4 py-3">{{ $lead->company }}</td>

                            <td class="px-4 py-3">
                                <span class="px-2 py-1 text-xs rounded
                                    @if($lead->status === 'new') bg-blue-100 text-blue-700
                                    @elseif($lead->status === 'contacted') bg-yellow-100 text-yellow-700
                                    @else bg-green-100 text-green-700
                                    @endif">
                                    {{ ucfirst($lead->status) }}
                                </span>
                            </td>

                            <td class="px-4 py-3 text-sm text-gray-500">
                                {{ $lead->created_at->format('d M Y') }}
                            </td>

                            <td class="px-4 py-3 text-right space-x-2">

                                <a href="{{ route('admin.leads.show', $lead) }}"
                                    class="text-blue-600 hover:underline text-sm">
                                    View
                                </a>

                                <form action="{{ route('admin.leads.destroy', $lead) }}" method="POST" class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button class="text-red-600 hover:underline text-sm">
                                        Delete
                                    </button>
                                </form>

                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>

        <div class="mt-6">
            {{ $leads->links() }}
        </div>

    </div>

</x-app-layout>