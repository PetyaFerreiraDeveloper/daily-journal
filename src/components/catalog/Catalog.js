import React from 'react';
import { useState, useEffect } from 'react';

const Catalog = () => {
    const [entries, setEntries] = useState([]);

    useEffect(() => {

    },[entries]);
    
  return (
    <section>
        <h2>All your journal entries are here</h2>
        {/* display div with each entry */}

        <div className="border-2">
            <p>This is my first entry</p>
            <p>createdOn: 2/8/2022</p>
            <p>content kdjlsajflskdjflasdjfks</p>
        </div>

    </section>
  )
}

export default Catalog