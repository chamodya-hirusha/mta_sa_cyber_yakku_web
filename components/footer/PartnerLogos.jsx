import Image from "next/image";
import CYBER from '../resources/Logo/CYBER_NEW.webp';
import BRAINTISA from '../../public/braintisa_logo_tp.png';


export default function PartnerLogos() {
  return (
    <div className="space-y-2">
      <h3 className="text-lg font-semibold text-white uppercase tracking-wider">Development Partners</h3>
      <div className="flex flex-col lg:flex-row items-start lg:items-center space-y-4 lg:space-y-0 lg:space-x-8">
        {/* MTA Server */}
        <div className="flex flex-col items-center space-y-3 group">
          <div className="relative w-62 h-32 bg-white/10 rounded-lg p-4 flex items-center justify-center flex-shrink-0">
            <Image
             src={CYBER}
              alt="CYBER"
              width={248}
              height={248}
              className="object-contain "
            />
          </div>
          <div className="text-center">
            <div className="text-sm text-purple-300 transition-colors duration-300 font-medium">
              MTA Server
            </div>
            <div className="text-xs text-purple-400/70">
            Cyber Devil & Patent Ship
            </div>
          </div>
        </div>

        {/* Braintisa */}
        <div className="flex flex-col items-center space-y-3 group">
          <div className="relative w-62 h-32 bg-white/10 rounded-lg p-4 flex items-center justify-center flex-shrink-0">
            <Image
              src={BRAINTISA}
              alt="Braintisa"
              width={248}
              height={248}
              className="object-contain "
            />
          </div>
          <div className="text-center">
            <div className="text-sm text-purple-300 transition-colors duration-300 font-medium">
              Braintisa
            </div>
            <div className="text-xs text-purple-400/70">
            Development Partner
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Additional Text Below Partner Logos */}
    </div>
  );
}
