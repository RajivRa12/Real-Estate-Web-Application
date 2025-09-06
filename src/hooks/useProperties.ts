import { useState, useEffect } from 'react';
import { PropertiesAPI, PropertyListing } from '@/services/api';

interface UsePropertiesReturn {
  properties: PropertyListing[];
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

interface UsePropertyReturn {
  property: PropertyListing | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

// Hook for fetching all properties
export const useProperties = (): UsePropertiesReturn => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProperties = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await PropertiesAPI.getAllProperties();
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return {
    properties,
    loading,
    error,
    refetch: fetchProperties,
  };
};

// Hook for fetching a single property by ID
export const useProperty = (id: string): UsePropertyReturn => {
  const [property, setProperty] = useState<PropertyListing | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProperty = async () => {
    if (!id) return;
    
    try {
      setLoading(true);
      setError(null);
      const data = await PropertiesAPI.getPropertyById(id);
      setProperty(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch property');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  return {
    property,
    loading,
    error,
    refetch: fetchProperty,
  };
};

// Hook for searching properties
export const usePropertySearch = (query: string) => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchProperties = async (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setProperties([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await PropertiesAPI.searchProperties(searchQuery);
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to search properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      searchProperties(query);
    }, 300); // Debounce search

    return () => clearTimeout(timeoutId);
  }, [query]);

  return {
    properties,
    loading,
    error,
    searchProperties,
  };
};

// Hook for fetching properties by city
export const usePropertiesByCity = (city: string) => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchByCity = async (cityName: string) => {
    if (!cityName.trim()) {
      setProperties([]);
      return;
    }

    try {
      setLoading(true);
      setError(null);
      const data = await PropertiesAPI.getPropertiesByCity(cityName);
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch properties by city');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchByCity(city);
  }, [city]);

  return {
    properties,
    loading,
    error,
    refetch: () => fetchByCity(city),
  };
};

// Hook for fetching featured properties
export const useFeaturedProperties = (limit: number = 6) => {
  const [properties, setProperties] = useState<PropertyListing[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchFeatured = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await PropertiesAPI.getFeaturedProperties(limit);
      setProperties(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch featured properties');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeatured();
  }, [limit]);

  return {
    properties,
    loading,
    error,
    refetch: fetchFeatured,
  };
};
