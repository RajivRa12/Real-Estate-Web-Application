import { useState } from 'react';
import { PropertiesAPI } from '@/services/api';
import { Button } from '@/components/ui/button';

const APITest = () => {
  const [testResult, setTestResult] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const testAPI = async () => {
    setLoading(true);
    setTestResult('Testing API connection...');
    
    try {
      const properties = await PropertiesAPI.getAllProperties();
      setTestResult(`✅ API Connected Successfully! Found ${properties.length} properties.`);
      
      if (properties.length > 0) {
        const firstProperty = properties[0];
        setTestResult(prev => prev + `\n\nFirst Property:\n- Name: ${firstProperty.name}\n- City: ${firstProperty.city}\n- State: ${firstProperty.state}\n- Owner: ${firstProperty.ownerName}`);
      }
    } catch (error) {
      setTestResult(`❌ API Error: ${error instanceof Error ? error.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-blue-800 mb-4">API Connection Test</h2>
      <p className="text-gray-600 mb-4">
        Test the connection to the MockAPI endpoint: 
        <code className="bg-gray-100 px-2 py-1 rounded text-sm ml-2">
          https://68b826bcb715405043274639.mockapi.io/api/properties/PropertyListing
        </code>
      </p>
      
      <Button 
        onClick={testAPI} 
        disabled={loading}
        className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded-full mb-4"
      >
        {loading ? 'Testing...' : 'Test API Connection'}
      </Button>
      
      {testResult && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <pre className="whitespace-pre-wrap text-sm">{testResult}</pre>
        </div>
      )}
    </div>
  );
};

export default APITest;
