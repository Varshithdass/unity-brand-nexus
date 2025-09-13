import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Location = () => {
  return (
    <div className="min-h-screen">
      <Navigation variant="hub" />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-cosmic-star mb-4">
              Our Location
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Visit us at our cosmic headquarters where creativity meets innovation
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-2xl text-cosmic-star flex items-center">
                  <MapPin className="w-6 h-6 mr-2" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-cosmic-star mt-1" />
                    <div>
                      <h3 className="font-semibold text-cosmic-star">Address</h3>
                      <p className="text-muted-foreground">
                        UnitySpaceHub Headquarters<br />
                        Electronic City, Phase 1<br />
                        Bangalore, Karnataka 560100<br />
                        India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-cosmic-star mt-1" />
                    <div>
                      <h3 className="font-semibold text-cosmic-star">Phone</h3>
                      <p className="text-muted-foreground">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-cosmic-star mt-1" />
                    <div>
                      <h3 className="font-semibold text-cosmic-star">Email</h3>
                      <p className="text-muted-foreground">unityspacehub@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-cosmic-star mt-1" />
                    <div>
                      <h3 className="font-semibold text-cosmic-star">Business Hours</h3>
                      <p className="text-muted-foreground">
                        Monday - Friday: 9:00 AM - 6:00 PM<br />
                        Saturday: 10:00 AM - 4:00 PM<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-2xl text-cosmic-star">Find Us Here</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-96 rounded-lg overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d486.13712085482837!2d77.86603967261453!3d12.901486054923609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1757751896238!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer variant="hub" />
    </div>
  );
};

export default Location;