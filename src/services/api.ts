interface PropertyListing {
  createdAt: string;
  name: string;
  buildingNumber: string;
  cardinalDirection: string;
  city: string;
  country: string;
  countryCode: string;
  latitude: number;
  longitude: number;
  state: string;
  timeZone: string;
  image: string;
  ownerName: string;
  contactNumber: string;
  id: string;
  // Additional fields that might be in the API
  price?: number;
  description?: string;
  bedrooms?: number;
  bathrooms?: number;
  area?: number;
  type?: 'house' | 'apartment' | 'villa' | 'condo';
  status?: 'for-sale' | 'for-rent' | 'sold' | 'rented';
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://68b826bcb715405043274639.mockapi.io/api/properties';

export class PropertiesAPI {
  static async getAllProperties(): Promise<PropertyListing[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing`);
      if (!response.ok) {
        throw new Error('Failed to fetch properties');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching properties:', error);
      throw error;
    }
  }

  static async getPropertyById(id: string): Promise<PropertyListing> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing/${id}`);
      if (!response.ok) {
        throw new Error('Failed to fetch property');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching property:', error);
      throw error;
    }
  }

  static async getPropertiesByCity(city: string): Promise<PropertyListing[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing?city=${encodeURIComponent(city)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch properties by city');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching properties by city:', error);
      throw error;
    }
  }

  static async getPropertiesByState(state: string): Promise<PropertyListing[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing?state=${encodeURIComponent(state)}`);
      if (!response.ok) {
        throw new Error('Failed to fetch properties by state');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching properties by state:', error);
      throw error;
    }
  }

  static async searchProperties(query: string): Promise<PropertyListing[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing?search=${encodeURIComponent(query)}`);
      if (!response.ok) {
        throw new Error('Failed to search properties');
      }
      return await response.json();
    } catch (error) {
      console.error('Error searching properties:', error);
      throw error;
    }
  }

  static async getFeaturedProperties(limit: number = 6): Promise<PropertyListing[]> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing?limit=${limit}`);
      if (!response.ok) {
        throw new Error('Failed to fetch featured properties');
      }
      return await response.json();
    } catch (error) {
      console.error('Error fetching featured properties:', error);
      throw error;
    }
  }

  static async createProperty(property: Omit<PropertyListing, 'id' | 'createdAt'>): Promise<PropertyListing> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });
      if (!response.ok) {
        throw new Error('Failed to create property');
      }
      return await response.json();
    } catch (error) {
      console.error('Error creating property:', error);
      throw error;
    }
  }

  static async updateProperty(id: string, property: Partial<PropertyListing>): Promise<PropertyListing> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(property),
      });
      if (!response.ok) {
        throw new Error('Failed to update property');
      }
      return await response.json();
    } catch (error) {
      console.error('Error updating property:', error);
      throw error;
    }
  }

  static async deleteProperty(id: string): Promise<void> {
    try {
      const response = await fetch(`${API_BASE_URL}/PropertyListing/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete property');
      }
    } catch (error) {
      console.error('Error deleting property:', error);
      throw error;
    }
  }
}

export type { PropertyListing };
