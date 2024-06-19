import React from 'react';

const Service: React.FC = () => {
  return (
    <div className='min-h-screen py-14'>
      <h1 className='text text-5xl font-semibold text-center'>
        Our Services
      </h1>
      <div className='w-full h-full flex flex-col md:flex-row lg:flex-row bg px-8- md:px-20 lg:px-20'>
        <div className='w-full md:w-1/2 lg:w-1/2 p-8 bg-[#fff9ec]'>
          <h1 className='text text-4xl font-medium text-center'>Legal Services</h1>
          <ol className='olClass'>
            <li>
              <span>1. Criminal</span>
              <ol className='nestedOl'>
                <li>Bail</li>
                <li>Trial</li>
                <li>Appeal</li>
                <li>Writ</li>
                <li>Others</li>
              </ol>
            </li>
          </ol>
          <ol className='olClass font-medium'>
            <li>
              <span>2. Civil</span>
              <ol className='nestedOl'>
                <li>Property</li>
                <li>Land</li>
                <li>Appeal</li>
                <li>Writ</li>
                <li>Others</li>
              </ol>
            </li>
          </ol>
          <ol className='olClass font-medium'>
            <li>
              <span>3. Taxation</span>
              <ol className='nestedOl'>
                <li>Direct Tax</li>
                <li>Notice</li>
                <li>Appeal</li>
                <li>Others</li>
              </ol>
            </li>
          </ol>
          <ol className="olClass">
            <li>
              <span>4. Indirect Tax/GST</span>
              <ol className='nestedOl'>
                <li>Notice</li>
                <li>Appeal</li>
                <li>Others</li>
              </ol>
            </li>
          </ol>
          <ol className="olClass">
            <li>
              <span>5. Family</span>
              <ol className='nestedOl'>
                <li>Marriage</li>
                <li>Divorce</li>
                <li>Maintenance</li>
              </ol>
            </li>
          </ol>
          <ol className="olClass">
            <li>
              <span>6. Service Matters</span>
              <ol className='nestedOl'>
                <li>Notice</li>
                <li>Appeal</li>
                <li>Writ</li>
              </ol>
            </li>
          </ol>
          <ol className="olClass">
            <li>
              <span>7. IPR</span>
              <ol className='nestedOl'>
                <li>Trademark</li>
                <li>Copyright</li>
                <li>Patent</li>
              </ol>
            </li>
          </ol>
          <ol className="olClass">
            <li>8. Consumer Case</li>
          </ol>
          <ol className="olClass">9. Motor Claim</ol>
          <ol className="olClass">10. Insurance Claim</ol>
          <ol className="olClass">11. Mining Cases</ol>
          <ol className="olClass">12. Bank Cases</ol>
          <ol className="olClass">13. ADR</ol>
          <ol className="olClass">14. RERA</ol>
          <ol className="olClass">15. Revenue Cases</ol>
          <ol className="olClass">16. Society Cases</ol>
        </div>
        <div className='w-full md:w-1/2 lg:w-1/2 p-8 bg-[#fff9ec]'>
          <h1 className='text text-4xl font-medium text-center'>Para Legal Services</h1>
          <ol className='olClass'>
            <li>
              <span>1. Taxation</span>
              <ol className='nestedOl'>
                <li>Income Tax Return</li>
                <li>IT Audit/Accounting</li>
                <li>TDS</li>
                <li>GST Return</li>
                <li>GST Audit</li>
              </ol>
            </li>
          </ol>
          <ol className='olClass font-medium'>
            <li>
              <span>2. Company</span>
              <ol className='nestedOl'>
                <li>Company compliance</li>
                <li>Company incorporation</li>
              </ol>
            </li>
          </ol>
          <ol className='olClass font-medium'>
            <li>
              <span>3. Registration</span>
              <ol className='nestedOl'>
                <li>Court Marriage</li>
                <li>Registry</li>
                <li>Gift Deed</li>
                <li>Gift Deed</li>
                <li>Will</li>
                <li>Digital Signature</li>
                <li>ISO Certificate</li>
                <li>NGO Registration</li>
                <li>Society Registration</li>
                <li>EWS, Income, Caste certificate</li>
                <li>FSSI (Food Licence)</li>
                <li>Partnership Deed</li>
                <li>Proprietorship</li>
                <li>Company Registration</li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
      
    </div>
  );
};

export default Service;
