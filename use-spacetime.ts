'use client';

import { useEffect, useState } from 'react';
import { DbConnection } from '@/spacetime_module_bindings';

const SPACETIME_URL = process.env.NEXT_PUBLIC_SPACETIME_URL || 'https://testnet.spacetimedb.com';
const MODULE_NAME = 'growth-pilot';

export function useSpacetime() {
  const [connection, setConnection] = useState<DbConnection | null>(null);
  const [isConnected, setIsConnected] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let db: DbConnection | null = null;

    async function connect(): Promise<void> {
      try {
        db = await DbConnection.builder()
          .withUri(`${SPACETIME_URL}`)
          .withModuleName(MODULE_NAME)
          .onConnect(() => {
            console.log('Connected to SpacetimeDB');
            setIsConnected(true);
          })
          .onConnectError((_ctx, error) => {
            console.error('Failed to connect to SpacetimeDB:', error);
            setError(error.message);
            setIsConnected(false);
          })
          .onDisconnect(() => {
            console.log('Disconnected from SpacetimeDB');
            setIsConnected(false);
          })
          .build();

        setConnection(db);
      } catch (err) {
        console.error('Error building SpacetimeDB connection:', err);
        setError(err instanceof Error ? err.message : 'Unknown error');
      }
    }

    connect();

    return () => {
      if (db) {
        db.disconnect();
      }
    };
  }, []);

  return { connection, isConnected, error };
}
