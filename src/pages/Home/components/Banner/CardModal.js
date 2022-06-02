import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CardModal() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="570"
                    width="385"
                    image="https://n1-cstg.mioto.vn/g/2022/04/30/00/5XZUFIQ4.jpg"
                    alt=""
                />
                <CardContent>
                    <Typography gutterBottom variant="h3" component="div" align="center">
                        VỮNG TAY TỰ LÁI CÙNG MÃ ACCENT - GIẢM NGAY 15% KHI THUÊ XE HYUNDAI ACCENT TRÊN MIOTO
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Với thiết kế trẻ trung, trang bị hiện đại cùng khả năng vận hành ổn định, Hyundai Accent luôn là
                        dòng xe đô thị được nhiều khách hàng lựa chọn.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Cùng trải nghiệm những mẫu xe Hyundai Accent mới và đẹp nhất trên Mioto.
                    </Typography>
                    <Typography variant="body2" component="p" align="center">
                        Đặc biệt, từ ngày 30/5 đến hết ngày 12/6/2022, khi nhập mã ACCENT, quý khách sẽ tiết kiệm ngay
                        15% (tối đa 150k) khi thuê xe Hyundai Accent tại Mioto.
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
