import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";

const DeptCard = ({ title, members }: { title: string; members: string[] }) => {
  return (
    <Card
      className="w-full h-100 md:h-100 md:w-80"
      x-chunk="dashboard-07-chunk-4"
    >
      <CardContent className="pt-6 pb-6">
        <div className="hidden md:grid md:gap-2">
          <Image
            alt="Product image"
            className="aspect-square w-full rounded-md object-cover"
            height="300"
            src="/dept-avatar.webp"
            width="300"
          />
        </div>
      </CardContent>
      <CardHeader className="-mt-6">
        <CardTitle className="text-lg mb-1">{title}</CardTitle>
        <CardDescription>
          <div className="flex flex-wrap mb-2">
            {members.map((member, index) => (
              <Badge key={index} className="text-[10px] mr-2 mb-2">
                {member}
              </Badge>
            ))}
          </div>
          <div className="text-xs text-muted-foreground max-w-lg text-balance leading-relaxed">
            Created on 12/06/2024
          </div>
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default DeptCard;
